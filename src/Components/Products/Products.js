import React from 'react'
import ProductBuilder from './ProductBuilder'
import './styles/products.scss'
import eVote from '../Assets/Image/evote.png';
import students from '../Assets/Image/students.png';
import summit from '../Assets/Image/Summit21.png';


const Products = () => {
    const products = [
        {imgSrc:students,name:"Student News Portal Telkom University",desc:"Students News Portal Telkom University, sebagai salah satu portal berita dan cyber media di Universitas Telkom yang mana merupakan bagian dari divisi Media Management CCI."},
        {imgSrc:summit,name:"CCI Summit",desc:"Sebuah acara dari rangkaian kegiatan workshop, seminar, tournament yang mencakup seluruh divisi pembelajaran CCI dan menjadikan CCI SUMMIT sebagai puncak dari acara CCI."},
        {imgSrc:eVote,name:"E-vote",desc:"Sebuah sistem pemilihan demokrasi berbasis digital, biasanya digunakan dalam kegiatan pemilihan BEM maupun DPM dan sejenisnya yang mencakup baik itu website maupun jaringan."}
    ]



    return (
    <div className='products-wrapper'>
        <div className="products">
            <h2>Products</h2>
            <div className="product-list">
                {
                    products.map((item,index) => {
                        return(
                            <ProductBuilder key={index} name={item.name} desc={item.desc} imgSrc={item.imgSrc} />
                        )
                    })
                }
                
            </div>
        </div>
        
    </div>
  )
}

export default Products