import React from 'react'
import { DataUrlManger } from '../Data/DataUrlManger';

export async function DataFetch(selectedSido, numOfRows) {

    try {
      const response = await fetch(DataUrlManger(selectedSido, numOfRows));
      const data = await response.json();
      const items = data.response.body.items;
      console.log(items);
      /* return (
        items
      ) */

    } catch (error) {
      console.error('Error fetching data:', error);
    }

}

