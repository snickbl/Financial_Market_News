import { useEffect } from "react";
import { 
  collection,
  query,
  onSnapshot,} from "firebase/firestore";
import { db } from './firebase';
import { useDispatch } from "react-redux";
import { InfoSlice } from "./ReduxToolkit/reducers/InfoSlice";

export const GetData = () => {
  
    const {getNews} = InfoSlice.actions
    const dispatch = useDispatch()

    useEffect(() => {
      try{
          const q = query(collection(db, "market_news"));
          const unsub = onSnapshot(q, (querySnapshot) => {
          let newsArray = [];
          querySnapshot.forEach((doc) => {
            newsArray.push({ ...doc.data(), id: doc.id });
          });
          
          dispatch(getNews(newsArray))
          
          });
          return () => unsub();
      }catch{
        GetData()
      }
    }, [getNews, dispatch]);
}
