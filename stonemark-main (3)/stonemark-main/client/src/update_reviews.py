import os
import re

client_src = r"c:\Users\Eli Wolff\OneDrive\the-stonemark-companyv3\stonemark-main (3)\stonemark-main\client\src"

reviews_src = '''const reviews = [
  { name: "Chris Morse", location: "Google Review", rating: 5, service: "Roof Replacement", date: "5 years ago", text: "We Contracted with Robert Yeatman to enclose our carport and replace the roof. His crew was punctual and did an Excellent job. The existing carport was not very attractive, but after they completed their work, It looks Great!!" },
  { name: "lisa mcghee", location: "Google Review", rating: 5, service: "Roof & Gutters", date: "5 years ago", text: "I am very happy with my new roof and gutters. Already received many compliments! Robert and his crew were very quick to get the job done. Very impressed! I highly recommend Stonemark to anyone who needs a new roof!!" },
  { name: "Val Hard", location: "Mt. Juliet", rating: 5, service: "Asphalt Shingles", date: "8 years ago", text: "They gave us a fair price and did a very good job replacing our asphalt shingles roof in Mt. Juliet." },
  { name: "BARB Prince", location: "Google Review", rating: 5, service: "Roof & Venting System", date: "3 years ago", text: "We are extremely happy with Robert and his company for the new roof and venting system that was done on our home. Our original roof was 22 years old and it was time for a new roof. Would highly recommend him." },
  { name: "Shannon Black", location: "Google Review", rating: 5, service: "Roof Replacement", date: "7 years ago", text: "StoneMark did an excellent job on our roof: one day here and done. Everything was explained thoroughly and we really got the sense we were working with true professionals. Great roof at a great price!" },
  { name: "Valerie Jones", location: "Google Review", rating: 5, service: "Roof Installation", date: "2 years ago", text: "I would recommend them for any of your needs. I had to have a roof put on and Mr Yeatman sat down and walked me through the process step by step. They came when they said they would and he was there to supervise." },
  { name: "Ken Dorsey", location: "Google Review", rating: 5, service: "Roof Replacement", date: "2 years ago", text: "Robert is a Class act. Gave me a quote in writing, that was easy to read and understand. Used quality materials and was priced extremely competitive in my opinion." },
  { name: "Karen P Munn Johnson", location: "Google Review", rating: 5, service: "Roofing Work", date: "6 years ago", text: "Mr. Yeatman and his son were professional, efficient, and friendly. They gave the BEST quote for the roofing work needed. The work was timely and looked wonderful. We HIGHLY recommend The StoneMark Company." },
  { name: "Sharon Yeatman", location: "Google Review", rating: 5, service: "Roof Replacement", date: "5 years ago", text: "I am very pleased with the work that The StoneMark Company did for me. The pricing seemed to be fair. Throughout the process they kept me informed. they showed up the day they said they would and completed the entire job in one day." },
  { name: "Jeff Gervais", location: "Google Review", rating: 5, service: "Roof Estimate", date: "4 years ago", text: "I hired The Stonemark Company after doing my research and getting a few estimates. They quoted me about $900 cheaper than the others using the same equipment as the other companies were using with the same warranties." },
  { name: "Faye Waters", location: "Google Review", rating: 5, service: "Roof Replacement", date: "2 years ago", text: "The StoneMark Company replaced my roof and it looks amazing! Robert is great to work with too!" },
  { name: "Dr. Rose Ogilvie", location: "Google Review", rating: 5, service: "Roofing Service", date: "4 years ago", text: "Very attentive to specific details, kept materials very, very organized. I never expected this from a roofing company. The owner went beyond the call of duty and beyond expectations. Kept the price..." },
  { name: "Audie Nicdao", location: "Google Review", rating: 5, service: "Roof Project", date: "4 years ago", text: "Robert Yeatman was so professional that he did not take any portion of the money until the project was done." },
  { name: "tommy hargrove", location: "Google Review", rating: 5, service: "Roofing Service", date: "3 years ago", text: "Great company. My 1st choice in roofing!!" },
  { name: "Missy", location: "Google Review", rating: 5, service: "Roof Installation", date: "5 years ago", text: "I highly recommend! Prompt, courteous and professional. Highest quality product and expert installation." },
  { name: "Alem Gebreyes", location: "Google Review", rating: 5, service: "Roof Service", date: "2 years ago", text: "Robert did an excellent job on my roof!" },
  { name: "Antoinette Hicks", location: "Google Review", rating: 5, service: "Roof Repair", date: "2 years ago", text: "Go wonderful roof" },
  { name: "Big C Alexander", location: "Google Review", rating: 5, service: "Roofing Service", date: "2 years ago", text: "Prompt and professional service." },
  { name: "gracie lewis", location: "Google Review", rating: 5, service: "Roof Installation", date: "2 years ago", text: "Wonderful Experience!!" },
  { name: "Parker Redmond", location: "Google Review", rating: 5, service: "Roof Replacement", date: "2 days ago", text: "Robert and his team did a fantastic job on our roof replacement. He explained the product choices and process thoroughly and kept us up to date through the completion of the job. The roof took only one day from start to finish." },
  { name: "Blake", location: "Google Review", rating: 5, service: "Total Tear Off & New Roof", date: "1 week ago", text: "Very professional and prompt with every aspect of the job. The crew was hard working and polite. They made sure they protected the shrubbery and covered my in ground pool to protect it. We had a total tear off and new replacement roof." },
  { name: "Randy Claiborne", location: "Murfreesboro, TN", rating: 5, service: "Roof Replacement", date: "3 weeks ago", text: "5 stars! The StoneMark Company in Murfreesboro, TN replaced my roof flawlessly. Robert Yeatman handled everything personally. He gave an in-depth overview of my old roof, multiple shingle options..." },
  { name: "Mike Hassell", location: "Google Review", rating: 5, service: "Roof Replacement", date: "3 weeks ago", text: "Absolutely a great job replacing my roof. And the cleanup afterwards, you will not believe I highly recommend them for a replacement of your roof." },
  { name: "Thomas", location: "Google Review", rating: 5, service: "Rental Property Roofs", date: "4 weeks ago", text: "I recently had StoneMark do 2 roofs for me on rental properties. The installation was handled professionally from start to finish! Their workers showed up properly at 7am and began the installation." },
  { name: "Truong Nguyen", location: "Google Review", rating: 5, service: "Roofing Service", date: "2 years ago", text: "Professional roofing contractor with excellent attention to detail." }
];'''

# 1. Update Reviews.tsx
reviews_page = os.path.join(client_src, "pages", "Reviews.tsx")
if os.path.exists(reviews_page):
    with open(reviews_page, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Replace the reviews array
    content = re.sub(r'const reviews = \[.*?\];', reviews_src, content, flags=re.DOTALL)
    
    # Replace "22" with "25" 
    content = content.replace("22+", "25+")
    content = content.replace('stars === 5 ? "22" : "0"', 'stars === 5 ? "25" : "0"')
    
    with open(reviews_page, "w", encoding="utf-8") as f:
        f.write(content)

# 2. Update Home.tsx
home_page = os.path.join(client_src, "pages", "Home.tsx")
if os.path.exists(home_page):
    with open(home_page, "r", encoding="utf-8") as f:
        content = f.read()
    content = content.replace('value: 22', 'value: 25')
    content = content.replace('22+ Reviews', '25+ Reviews')
    with open(home_page, "w", encoding="utf-8") as f:
        f.write(content)

# 3. Update ReviewsSection.tsx
reviews_section = os.path.join(client_src, "components", "ReviewsSection.tsx")
if os.path.exists(reviews_section):
    with open(reviews_section, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Needs a smaller version of reviews for the slider, we can just use the first 5 real reviews
    mini_reviews = '''const reviews = [
  { text: "We Contracted with Robert Yeatman to enclose our carport and replace the roof. His crew was punctual and did an Excellent job... It looks Great!!", author: "Chris Morse", location: "Google Review", rating: 5 },
  { text: "StoneMark did an excellent job on our roof: one day here and done. Everything was explained thoroughly and we really got the sense we were working with true professionals.", author: "Shannon Black", location: "Google Review", rating: 5 },
  { text: "They gave us a fair price and did a very good job replacing our asphalt shingles roof in Mt. Juliet.", author: "Val Hard", location: "Mt. Juliet, TN", rating: 5 },
  { text: "I hired The Stonemark Company after doing my research and getting a few estimates. They quoted me about $900 cheaper than the others using the same equipment... with the same warranties.", author: "Jeff Gervais", location: "Google Review", rating: 5 },
  { text: "Robert and his team did a fantastic job on our roof replacement. He explained the product choices and process thoroughly and kept us up to date through the completion of the job.", author: "Parker Redmond", location: "Google Review", rating: 5 },
];'''
    content = re.sub(r'const reviews = \[.*?\];', mini_reviews, content, flags=re.DOTALL)
    content = content.replace('22+ Reviews', '25+ Reviews')
    
    with open(reviews_section, "w", encoding="utf-8") as f:
        f.write(content)

print("Reviews updated successfully.")
