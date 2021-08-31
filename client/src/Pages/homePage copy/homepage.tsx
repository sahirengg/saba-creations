import React from 'react';
import PrimarySearchAppBar from '../../CommonComponents/Header/header';
import FullBanner from '../../CommonComponents/Banner/slickSlider';
import CateroryComp from '../../CommonComponents/Categories/categoryComp';
import LearningComplexState from '../../CommonComponents/Categories/sample';
import NewArrivals from '../../CommonComponents/NewArrivals/newArrivals';
import CollectionsList from '../../CommonComponents/Collections/collections';
import NewsLetterSection from '../../CommonComponents/NewsLetter/newsLetter';
import InstaFeed from '../../CommonComponents/InstaFeed/instaFeed';
import FooterComponent from '../../CommonComponents/Footer/footer';
import CatListProvider from '../../providers/CatList/catListProvider'
function HomePage() {
  
  const notesReducer = (state:any, action:any) => {
      switch(action.type){
        case "populates_data":
          return action.notes

        default: return state;
      }
  }

  return (
    <>
    <CatListProvider>
      <PrimarySearchAppBar />
      <FullBanner />
      <CateroryComp />
      <NewArrivals />
       <CollectionsList />
       <NewsLetterSection />
       < InstaFeed />
       <FooterComponent />
       </CatListProvider>
      {/* <LearningComplexState /> */}
    </>
  );
}

export default HomePage;
