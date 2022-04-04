// import React, { Component } from 'react';
// import Navbar from '../../../components/Layout/Navbar';
// import PageHeader from '../../../components/NewsDetails/PageHeader';
// import ProductDetailsContent from '../../../components/NewsDetails/ProductDetailsContent';
// import Footer from '../../../components/Layout/Footer';

// class NewsDetails extends Component {
//     render() {
//         return (
//             <>
//                 <Navbar />

//                 <PageHeader />

//                 <ProductDetailsContent />

//                 <Footer />
//             </>
//         );
//     }
// }

// export default NewsDetails;
import React, { Component } from "react";
import Navbar from "../../../components/Layout/Navbar";
import PageHeader from "../../../components/NewsDetails/PageHeader";
import ProductDetailsContent from "../../../components/NewsDetails/ProductDetailsContent";
import Footer from "../../../components/Layout/Footer";
import { useRouter } from "next/router";
const Index = () => {
  const router = useRouter();
  const productId = router.query.productId;
  return (
    <>
      <Navbar />
      <PageHeader />
      <ProductDetailsContent productId={productId} />
      <Footer />
    </>
  );
};
export default Index;
