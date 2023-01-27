// import Header from '../components/header'
import Presentation from '../components/presentation'
import PostTree from '../components/postTree'
import HomeCss from './home.module.css'
import SelfAccount from '../components/selfInfo'
import Header from '../components/header'
import Footer from '../components/footer'
// import CreateArticle from '../components/createArticle'
// import Footer from '../components/footer'
// import PrePost from './components/prePost'


function Home(){
    return(
        <>
        <div className={HomeCss.out}>
            <Header  />
            <div className={HomeCss.outLine}>
                <div className={HomeCss.main}>
                    <Presentation></Presentation>
                    <PostTree></PostTree>
                </div>
                <SelfAccount /> 
            </div>
            <Footer />
        </div>
        </>
    )
}

export default Home