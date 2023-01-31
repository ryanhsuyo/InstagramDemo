import React,{useEffect} from "react";
import exploreComCss from '../components/exploreCom.module.css'
import img1 from '../assets/cat1.jpg'
import img2 from '../assets/cat2.jpg'
import img3 from '../assets/cat3.jpg'
import img4 from '../assets/cat4.jpg'
import img5 from '../assets/cat5.jpg'
import img6 from '../assets/cat6.jpg'
import img7 from '../assets/cat7.jpg'
import img8 from '../assets/cat8.jpg'
import img9 from '../assets/cat9.jpg'
import img10 from '../assets/cat10.jpg'
import img11 from '../assets/cat11.jpg'
import img12 from '../assets/cat12.jpg'
import img13 from '../assets/cat13.jpg'
import img14 from '../assets/cat14.jpg'
import img15 from '../assets/cat15.jpg'
import img16 from '../assets/cat16.jpg'
import img17 from '../assets/cat17.jpg'
import img18 from '../assets/cat18.jpg'
import { useState } from "react";


function ExploreCom() {
    const [allImages, setAllImages] = useState([
        img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18
      ]);
    const [selectedImages, setSelectedImages] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        loadData();
        window.addEventListener("scroll", handleScroll, true);
        return () => {
          window.removeEventListener("scroll", handleScroll, true);
        };
    }, []);

    const loadData = () => {
        setLoading(true);
        setTimeout(() => {
            setSelectedImages(selectedImages.concat(allImages.slice(0, 9)));
            setAllImages(allImages.slice(9));
            setLoading(false);
        }, 1000);
    };

    const handleScroll = () => {
        const liveDom = document.getElementById("imgContainer");
        const clientHeight = liveDom.clientHeight;
        const scrollTop = liveDom.scrollTop;
        const scrollHeight = liveDom.scrollHeight;
        if (scrollTop + clientHeight >= scrollHeight * 0.33) {
            setTimeout(loadData, 0);
            console.log(scrollTop + clientHeight , scrollHeight, scrollHeight * 0.33,'載入');
          }
        console.log(scrollTop + clientHeight , scrollHeight, '沒載');
    };
    return (

        <div className={exploreComCss.outLine}>
          <div className={exploreComCss.imgContainer} id="imgContainer">
            {selectedImages.map((image, index) => (
              <img
                className={exploreComCss.imgItem}
                src={image}
                alt={`img${index + 1}`}
                key={`img-${index}`}
              />
            ))}
          </div>
          {allImages.length > selectedImages.length && (
            <div className={exploreComCss.loadMore}>
              {loading ? "載入中..." : "載入更多"}
            </div>
          )}
        </div>
      );
  }
  
export default ExploreCom;