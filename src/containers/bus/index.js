import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Bus() {
  const [data, setData] = useState({});
  useEffect(() => {
    const getBus = async () => {
      try {
        const response = await axios({
          method: 'POST',
          url: 'https://me25o865m6.execute-api.ap-southeast-1.amazonaws.com/production/',
          data: {
            url: 'https://shanghaicity.openservice.kankanews.com/public/bus/Getstop',
            method: 'POST',
            data: 'stoptype=1&stopid=9.&sid=2ead3da23d76f7eda503b34b4288b990',
            headers: {
              Origin: 'https://shanghaicity.openservice.kankanews.com',
              'User-Agent':
                'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.119 Mobile Safari/537.36',
              'Content-Type': 'application/x-www-form-urlencoded',
              Cookie:
                'aliyungf_tc=AQAAAIOA01vRPg0AjKdYciNYrXaFTIrE; acw_tc=707c9f9515516784628686126e3b197c5ba4983838fe33560105a0d2d49a03; XSRF-TOKEN=eyJpdiI6IlFTd2ZMbVVRdGdaN1UrblN1c245S3c9PSIsInZhbHVlIjoic2t5dlJQV3F3M0lGbVM0NlorS3BQVHpEYWJsWjdycmM1SlJHUUJMemh0QVVwMWVHUjhQVjNaVEh1WmdESlRQbzk3THpCaUxxU1VlR2JIeWFnNTBGblE9PSIsIm1hYyI6Ijc3N2VlMjJkYzQ2M2E4MjQ3ODFkMzhmNWM5YmNjYmFkNTNjOWM2NDRiYjFiY2RkNzg3OWM1OTEwOGJhYTM2N2IifQ%3D%3D; _session=eyJpdiI6IjBLWlwvSlI4MmNVSjlWYTRMQzlBVWtnPT0iLCJ2YWx1ZSI6IlJJYXRtdE5pT1N5aGpwSjJFMnpqRW41WmJLUFlGUkFYbVdWM1NUYkRUVVJkaGFnUUhmSTFNUDBvSUxvVU9oaHBjWnl1OGVqeUJIcWhaWVpqREpDT1BRPT0iLCJtYWMiOiI3ZjhkZDA1ODA4ZDE0ZTMyZDQ2NzgxYjA5MWIyOGRiNTE2M2Y4MmRkMDMxZDY4ZTUzYmY1MTA5OWNiOGIxYTFhIn0%3D; souid=wKgBHFx8u/OOYl5cI44TAg==; Hm_p1vt_6f69830ae7173059e935b61372431b35=eSgsNFx8u/6ZYgc+BYy8Ag==; SERVERID=c6de652ace7b1e6134145ef11b72ccf7|1551678463|1551678462; _ga=GA1.2.946055380.1551678463; _gat=1',
            },
          },
        });
        setData(response);
      } catch (error) {
        console.log(error);
      }
    };
    getBus();
  });
  console.log(data);
  return <div>Bus</div>;
}
