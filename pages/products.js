import { useRouter } from 'next/router'
import database from '../database';

export default function Products() {
    const x = useRouter()
    console.log(x.asPath.split("/")[1])
    const productShow = database.products.filter(i => i.id == x.asPath.split("/")[1])
    console.log(productShow)
    return (
        <div>
            <div className="header">
                <ul>
                    <li>Products Page</li>
                </ul>
                <img src={productShow[0].image} alt={productShow[0].title} />
                <h3>
                    {
                        productShow[0].title
                    }
                </h3>
                <p>{productShow[0].description}</p>
            </div>
            <main>

            </main>
        </div>
    );
}