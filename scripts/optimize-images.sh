#!/bin/bash
# Image Optimization Script for TurtleTools
# Converts images to WebP and generates responsive sizes

set -e

IMAGES_DIR="public/images"
BLOG_IMAGES_DIR="public/blog-images"

echo "🖼️  Optimizing images for TurtleTools..."

# Check if cwebp is installed
if ! command -v cwebp &> /dev/null; then
    echo "📦 Installing webp tools..."
    sudo apt-get update -qq
    sudo apt-get install -y webp
fi

# Function to optimize an image
optimize_image() {
    local input_file="$1"
    local base_name="${input_file%.*}"
    local ext="${input_file##*.}"
    
    # Skip if already webp
    if [[ "$ext" == "webp" ]]; then
        echo "  ⏭️  Skipping $input_file (already WebP)"
        return
    fi
    
    # Convert to WebP (quality 85)
    local output_file="${base_name}.webp"
    if [[ ! -f "$output_file" ]] || [[ "$input_file" -nt "$output_file" ]]; then
        echo "  🔄 Converting $input_file → ${output_file##*/}"
        cwebp -q 85 "$input_file" -o "$output_file" 2>/dev/null || {
            echo "  ⚠️  Failed to convert $input_file"
            return
        }
        
        # Calculate savings
        original_size=$(stat -c%s "$input_file")
        new_size=$(stat -c%s "$output_file")
        savings=$(( (original_size - new_size) * 100 / original_size ))
        echo "  ✅ Saved ${savings}% (${original_size} → ${new_size} bytes)"
    else
        echo "  ✅ $output_file is up to date"
    fi
}

# Optimize all images in public/images
if [[ -d "$IMAGES_DIR" ]]; then
    echo ""
    echo "📁 Processing $IMAGES_DIR..."
    find "$IMAGES_DIR" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) | while read -r img; do
        optimize_image "$img"
    done
fi

# Optimize blog images
if [[ -d "$BLOG_IMAGES_DIR" ]]; then
    echo ""
    echo "📁 Processing $BLOG_IMAGES_DIR..."
    find "$BLOG_IMAGES_DIR" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) | while read -r img; do
        optimize_image "$img"
    done
fi

echo ""
echo "✅ Image optimization complete!"
echo ""
echo "Next steps:"
echo "1. Update image references to use .webp"
echo "2. Add <picture> elements with fallbacks"
echo "3. Run 'npm run build' to regenerate static site"
