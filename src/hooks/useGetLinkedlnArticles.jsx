import { useCallback, useEffect, useState } from "react";
import {linkedlnApi} from "../services/api";


/**
 * Sends mail to developers account.
 * @returns {Function} {fetchArticles} is usefull to set custom data; 
 * @returns {Array} {articles} returns an Array from medium page of developer 
 * 
 */

const useGetMediumArticles = () => {
  const [articles, setArticles] = useState([]);

  const fetchArticles = useCallback(async () => {
    try {
      const response = await linkedlnApi.get();
      setArticles(response.data.items);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    fetchArticles();
  }, []);

  return [articles, fetchArticles]; 
};

export default useGetMediumArticles;
