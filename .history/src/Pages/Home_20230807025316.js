import React, { Fragment } from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import slider from '.././img/slider-img.png'
import img1 from '.././img/Mobile Phone.png'
import img2 from '.././img/headphone.png'
import img3 from '.././img/tp6.png'
import img4 from '.././img/smart watch.png'
import { FiTruck } from 'react-icons/fi';
import { BsCurrencyDollar } from 'react-icons/bs';
import { CiPercent } from 'react-icons/ci';
import { BiHeadphone } from 'react-icons/bi';
import { AiOutlineShoppingCart, AiOutlineCloseCircle } from 'react-icons/ai';
import { BsEye } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import './Home.css'
import Homeproduct from '../Components/HomeProduct'
import { useAppContext } from '../Components/Context'
const Home = () => {
  const { detail , View , close , setClose} = useAppContext();

  return (
    <Fragment>
        <div className='top_banner '>
        <div className='container d-flex justify-content-between align-items-center flex-wrap'>
        <div className='detail col-md-6 col-lg-8  col-sm-12 align-items-center'>
        <h2>The Best Note Book Collection 2023</h2>
        <button>
        <Link to='/product' className=' text-decoration-none'>Shop Now <BsArrowRight/></Link>
        </button>
        </div>
        <div className='img_box col-md-6 col-lg-4 col-sm-12 align-items-center'>
            <img src={slider} alt='Slider-img'/>
        </div>
        </div>
        </div>
        <div className='product_type w-100  '>
            <div className='container d-flex justify-content-around flex-wrap col-lg-3 col-md-6 col-sm-12  w-auto mt-4 '>
            <div className='box '>
            <div className='img_box'>
            <img src={img1} alt='mobile'/>
            </div>
            <div className='detail'><p>23 Products</p>
            </div>
            </div>
            <div className='box'>
            <div className='img_box'>
            <img src={img2} alt='mobile'/>
            </div>
            <div className='detail'><p>52 Products</p>
            </div>
            </div>
            <div className='box'>
            <div className='img_box'>
            <img src={img3} alt='mobile'/>
            </div>
            <div className='detail'><p>63 Products</p>
            </div></div>
            <div className='box'>
            <div className='img_box'>
            <img src={img4} alt='mobile'/>
            </div>
            <div className='detail'><p>18 Products</p>
            </div>
    
            </div>
            </div>
            </div>
            <div className='about'>
            <div className='container d-flex justify-content-around flex-wrap col-lg-3 col-md-6 col-sm-12  w-auto my-3'>
                <div className='box'>
                <div className='icon'>
                  <FiTruck />
                </div>
                <div className='detail'>
                  <h5>Free Shipping</h5>
                  <p>Oder above $1000</p>
                </div>
              </div>
              <div className='box'>
                <div className='icon'>
                  <BsCurrencyDollar />
                </div>
                <div className='detail'>
                  <h5>Return & Refund</h5>
                  <p>Money Back Gaurenty</p>
                </div>
              </div>
              <div className='box'>
                <div className='icon'>
                  <CiPercent />
                </div>
                <div className='detail'>
                  <h5>Member Discount</h5>
                  <p>On every Oder</p>
                </div>
              </div>
              <div className='box'>
                <div className='icon'>
                  <BiHeadphone />
                </div>
                <div className='detail'>
                  <h5>Customer Support</h5>
                  <p>Every Time Call Support</p>
                </div>
              </div>
            </div>
          </div>

          {
            close ?
            <div className='product_detail'>
            <div className='container'>
                <button onClick={() => setClose(false)} className='closebtn'><AiOutlineCloseCircle /></button>
                {
                    detail.map((el) => 
                    {
                        return(
                            <div className='productbox'>
                                <div className='img-box'>
                                    <img src={el.Img} alt={el.Title}></img>
                                </div>
                                <div className='detail'>
                                    <h4>{el.Cat}</h4>
                                    <h2>{el.Title}</h2>
                                    <p>A Screen Everyone Will Love: Whether your family is streaming or video chatting with friends tablet A8... </p>
                                    <h3>{el.Price}</h3>
                                    <button>Add To Cart</button>
                                </div>
                            </div>
                        )
                    })
                }
                <div className='productbox'></div>
            </div>
        </div> : null
        }


          <div className='product container d-flex justify-content-around flex-wrap  col-lg-3 col-md-6 col-sm-12  w-auto'>
          <h2 className=' w-auto mx-auto mt-3 mb-5'>Top Products</h2>
          <div className='container d-flex justify-content-around flex-wrap  col-lg-3 col-md-6 col-sm-12  w-auto'>
            {Homeproduct.map((el)=>{
              return(
                <div className='box ' key={el.id}>
                <div className='img_box d-flex justify-content-around '>
                <img src={el.Img} alt={el.Title}></img>
                <div className='icon'>
                  <li ><AiOutlineShoppingCart /></li>
                  <li onClick={} ><BsEye /></li>
                  <li><AiOutlineHeart /></li>                                     
                </div>
              </div>
              <div className='detail '>
              <p> {el.Cat}</p>
              <h4 className=''>{el.Title}</h4>
              <h5 >{el.Price}</h5>
              </div>
                </div>
              )
            })}
      </div></div>
      <div className='banner my-4'>
            <div className='container d-flex justify-content-between align-items-center flex-wrap  '>
            <div className='detail ol-md-6 col-lg-7  col-sm-12  justify-content-center'>
            <h4>LATEST TECHNOLOGY ADDED</h4>
            <h3>Apple ipad 10.2 9th Gen - 2021</h3>
            <p><BsCurrencyDollar/>986</p>
            <Link to='/product' className='link'>Shop Now  <BsArrowRight /></Link>

            </div>
            <div className='img_box col-md-6 col-lg-4 col-sm-12 justify-content-center'>
            <img src={slider} alt='slider-img'/>
            </div>
            </div>
      </div>
          
            
    </Fragment>
  )
}

export default Home
