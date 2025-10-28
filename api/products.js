// --- api/products.js: FINAL EXPANDED CODE (10 Products) ---

module.exports = (req, res) => {
    // EXPANDED product list with 10 products and corrected file extensions
    const allProducts = [
        {
            id: 1,
            name: 'DevOps T-Shirt',
            price: 25.00,
            tags: ['clothing', 'devops', 'merch'],
            imageUrl: '/images/devops-tee.jpg', // CHECKED: .jpg
            description: 'Comfortable cotton T-shirt for the dedicated DevOps engineer. Show your passion for automation.'
        },
        {
            id: 2,
            name: 'Terraform Mug',
            price: 15.00,
            tags: ['accessory', 'iac', 'tool'],
            imageUrl: '/images/terraform-mug.jpg', // CHECKED: .jpg
            description: 'Start your day with some Infrastructure as Code motivation. Perfect for coffee or tea.'
        },
        {
            id: 3,
            name: 'Serverless Sticker Pack',
            price: 10.00,
            tags: ['accessory', 'devops', 'sticker'],
            imageUrl: '/images/serverless-stickers.png', // CHECKED: .png
            description: 'Pack of 10 high-quality vinyl stickers for your laptop, water bottle, or server rack.'
        },
        {
            id: 4,
            name: 'Cloud Computing Hoodie',
            price: 45.00,
            tags: ['clothing', 'cloud', 'warm'],
            imageUrl: '/images/cloud-hoodie.jpg', // CHECKED: .jpg
            description: 'Stay warm while deploying to the cloud. Unisex design.'
        },
        {
            id: 5,
            name: 'Kubernetes Guidebook',
            price: 35.00,
            tags: ['book', 'kubernetes', 'devops', 'tool'],
            imageUrl: '/images/kubernetes-book.png', // CHECKED: .png
            description: 'The definitive guide to container orchestration. From beginner to advanced.'
        },
        {
            id: 6,
            name: 'Docker Whale Plushie',
            price: 20.00, 
            tags: ['collectible', 'docker', 'fun', 'devops'],
            imageUrl: '/images/docker-plushie.jpg', // CHECKED: .jpg
            description: 'Cuddly Docker whale plushie. Perfect mascot for your continuous delivery pipeline.'
        },
        // --- FOUR NEW PRODUCTS ADDED BELOW ---
        {
            id: 7,
            name: 'CI/CD Pipeline Poster',
            price: 18.00,
            tags: ['accessory', 'devops', 'learning'],
            imageUrl: '/images/ci-cd-poster.jpg', // ASSUMED: .jpg (You'll need to download this image)
            description: 'Large wall poster detailing a continuous integration and deployment workflow.'
        },
        {
            id: 8,
            name: 'AWS Lambda Pin',
            price: 8.00,
            tags: ['accessory', 'cloud', 'serverless'],
            imageUrl: '/images/lambda-pin.png', // ASSUMED: .png (You'll need to download this image)
            description: 'Small enamel pin featuring the AWS Lambda logo.'
        },
        {
            id: 9,
            name: 'GitOps Workflow Book',
            price: 40.00,
            tags: ['book', 'gitops', 'tool'],
            imageUrl: '/images/gitops-book.jpg', // ASSUMED: .jpg (You'll need to download this image)
            description: 'An advanced technical book covering infrastructure automation using Git.'
        },
        {
            id: 10,
            name: 'Monitoring Dashboard Screen',
            price: 100.00,
            tags: ['collectible', 'monitoring', 'fun'],
            imageUrl: '/images/monitor-screen.jpg', // ASSUMED: .jpg (You'll need to download this image)
            description: 'A mock-up of a monitoring dashboard on a mini-screen collectible.'
        }
    ];

    // ... (Filtering/Searching logic remains the same) ...
    const filterTag = req.query.tag ? req.query.tag.toLowerCase() : null;
    const searchTerm = req.query.search ? req.query.search.toLowerCase() : null;

    let filteredProducts = allProducts;
    let message = "Successfully retrieved E-commerce products!";

    if (filterTag) {
        filteredProducts = filteredProducts.filter(product =>
            product.tags.includes(filterTag)
        );
        message = `Products filtered by tag: ${filterTag}`;
    }

    if (searchTerm) {
        filteredProducts = filteredProducts.filter(product =>
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm)
        );
        message = `Products matching search term: "${searchTerm}"`;
    }

    if (filterTag && searchTerm) {
        message = `Products matching tag "${filterTag}" and search "${searchTerm}"`;
    }

    return res.status(200).json({
        message: message,
        count: filteredProducts.length,
        data: filteredProducts
    });
};