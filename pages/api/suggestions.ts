import { NextApiHandler } from "next";
import { fetchProductsAndSortBy } from "../../services/shopify";

// sending requests to an external server via here because of CORS
const handler: NextApiHandler = async (req, res) => {
    try {
        const products = await fetchProductsAndSortBy({
            queryString: req.query.q as string,
            sortKey: req.query.sortBy as string,
            reverse: false,
        });
        res.send(products);
    } catch (e) {
        res.status(500);
        res.json(e);
    }
};

export default handler;
