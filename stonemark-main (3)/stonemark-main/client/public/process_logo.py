import sys
from PIL import Image

def process_logo(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    data = img.getdata()
    
    new_data = []
    
    for item in data:
        r, g, b, a = item
        
        # Make white background transparent
        if r > 240 and g > 240 and b > 240:
            new_data.append((255, 255, 255, 0))
        else:
            # Change blue to Stonemark Orange (#F97316)
            if b > r + 30 and b > g + 30:
                intensity = (r + g + b) / 3.0 / 255.0
                nr = min(255, int(249 * intensity * 1.3))
                ng = min(255, int(115 * intensity * 1.3))
                nb = min(255, int( 22 * intensity * 1.3))
                new_data.append((nr, ng, nb, a))
            else:
                # Leave dark blue text
                new_data.append(item)
                
    img.putdata(new_data)
    img.save(output_path, "PNG")
    print("Optimization complete")

if __name__ == "__main__":
    process_logo(sys.argv[1], sys.argv[2])
