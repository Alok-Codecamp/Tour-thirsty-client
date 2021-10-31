// use local storage as your db for now

import React, { useState } from 'react';
import useAuth from './useAuth'
import useFirebase from './useFirebase';

const useLocalStore = () => {
        const bookingName="booking";
        const addToLocal = id => {
        const exists = getLocal();
        let shopping_cart = {};
        if (!exists) {
          shopping_cart[id] = 1;
        }
        else {
          shopping_cart = JSON.parse(exists);
          if (shopping_cart[id]) {
            const newCount = shopping_cart[id] + 1;
            shopping_cart[id] = newCount;
          }
          else {
            shopping_cart[id] = 1;
          }
        }
        updateLocal(shopping_cart);
      }
      
      const getLocal = () => localStorage.getItem(bookingName);
      
      const updateLocal = cart => {
        localStorage.setItem(bookingName, JSON.stringify(cart));
      }
      
      const removeFromLocal = id => {
        const exists = getLocal();
        if (!exists) {
      
        }
        else {
          const shopping_cart = JSON.parse(exists);
          delete shopping_cart[id];
          updateLocal(shopping_cart);
        }
      }
      
      const getBooking = () => {
        const exists = getLocal();
        return exists ? JSON.parse(exists) : {};
      }
      
     
      
      return {
           addToLocal , 
           removeFromLocal, 
           getBooking 
        }
  
};

export default useLocalStore;