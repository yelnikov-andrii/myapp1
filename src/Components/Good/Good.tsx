import React from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useGetProductById } from '../../api/useGetProductById';
import { Loading } from '../UI/Loading';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const Good = () => {
  const params = useParams();
  const { good, loading, error } = useGetProductById(params.id);
  
  if (error) {
    return (
      <main className='main'>
      <h1>
        Error: {error}
      </h1>
      </main>
    )
  }

  console.log(good)

  return (
    <main className='main'>
      <Container>
        <h1 className='mb-4'>
          Good's page
        </h1>
        {loading ? (
          <Loading />
        ) : (
          good && (
            <div>
            <h2>
              {good.title}
            </h2>
            <h3>
              {good.description}
            </h3>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              className="mt-5"
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
            >  
              {good.images && good.images.map((image: string, index: number) => (
                <SwiperSlide 
                  className='w-100 d-flex justify-content-center p-5'
                  key={image + index}
                >
                  <img 
                    src={image}
                    alt=""
                    style={{
                      maxHeight: '250px'
                    }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <h4 className='mt-4'>
              {`Price - ${good.price}$`}
            </h4>
            <h5>
              {`Rating - ${good.rating}`}
            </h5>
            <h6>
              {`Stock - ${good.stock}`}
            </h6>
          </div>
          )
        )}
      </Container>
    </main>
  );
};

