// --- api/products.js: FINAL CODE (ALL PNG EXTENSIONS) ---

module.exports = (req, res) => {
    // Corrected product list with ALL image extensions set to .png
    const allProducts = [
        {
            id: 1,
            name: 'DevOps T-Shirt',
            price: 25.00,
            tags: ['clothing', 'devops', 'merch'],
            imageUrl: '/images/devops-tee.png', // <-- FIXED to .png
            description: 'Comfortable cotton T-shirt for the dedicated DevOps engineer. Show your passion for automation.'
        },
        {
            id: 2,
            name: 'Terraform Mug',
            price: 15.00,
            tags: ['accessory', 'iac', 'tool'],
            imageUrl: '/images/terraform-mug.png', // <-- FIXED to .png
            description: 'Start your day with some Infrastructure as Code motivation. Perfect for coffee or tea.'
        },
        {
            id: 3,
            name: 'Serverless Sticker Pack',
            price: 10.00,
            tags: ['accessory', 'devops', 'sticker'],
            imageUrl: '/images/serverless-stickers.png', // Already .png
            description: 'Pack of 10 high-quality vinyl stickers for your laptop, water bottle, or server rack.'
        },
        {
            id: 4,
            name: 'Cloud Computing Hoodie',
            price: 45.00,
            tags: ['clothing', 'cloud', 'warm'],
            imageUrl: '/images/cloud-hoodie.png', // <-- FIXED to .png
            description: 'Stay warm while deploying to the cloud. Unisex design.'
        },
        {
            id: 5,
            name: 'Kubernetes Guidebook',
            price: 35.00,
            tags: ['book', 'kubernetes', 'devops', 'tool'],
            imageUrl: '/images/kubernetes-book.png', // Already .png
            description: 'The definitive guide to container orchestration. From beginner to advanced.'
        },
        {
            id: 6,
            name: 'Docker Whale Plushie',
            price: 20.00,
            tags: ['collectible', 'docker', 'fun', 'devops'],
            imageUrl: '/images/docker-plushie.png', // <-- FIXED to .png
            description: 'Cuddly Docker whale plushie. Perfect mascot for your continuous delivery pipeline.'
        },
        // --- If you added 4 new products, ensure they are also .png here ---
        // { id: 7, name: 'CI/CD Pipeline Poster', price: 18.00, tags: ['accessory', 'devops', 'learning'], imageUrl: '/images/ci-cd-poster.png', description: '...' },
        // { id: 8, name: 'AWS Lambda Pin', price: 8.00, tags: ['accessory', 'cloud', 'serverless'], imageUrl: '/images/lambda-pin.png', description: '...' },
        // { id: 9, name: 'GitOps Workflow Book', price: 40.00, tags: ['book', 'gitops', 'tool'], imageUrl: '/images/gitops-book.png', description: '...' },
        // { id: 10, name: 'Monitoring Dashboard Screen', price: 100.00, tags: ['collectible', 'monitoring', 'fun'], imageUrl: '/images/monitor-screen.png', description: '...' }
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