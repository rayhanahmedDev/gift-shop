import { useState, useEffect} from "react"
import Featured from "../../../component/Navber/Featured"


export default function FeaturedProducted() {

  const [featuredData, setFeatured] = useState([])

   useEffect(() => {
    fetch('/data.json')
    .then((res) => res.json())
    .then((data) => setFeatured(data))

  }, [])

  
  
  return (
    <div className="my-16">
        <div className="text-center">
            <h2 className="text-4xl font-semibold">Shop The Featured Products</h2>
            <p className="mt-4 text-[#01162DAB] text-[16px]"> Whether you&apos;re looking to treat yourself or surprise someone special, makes every occasion memorable.</p>
        </div>

        {/* featured products */}
        <div>
            {/* top featured producted */}
            <div>

            </div>
            {/* others products */}
            <div>
                {
                  featuredData.map((featured) => <Featured key={featured.id} featured = {featured}></Featured>)
                }
            </div>
        </div>
    </div>
  )
}
