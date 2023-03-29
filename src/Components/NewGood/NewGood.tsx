import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Formik } from 'formik';
import * as yup from 'yup';
import * as uuid from "uuid";
import { useDispatch } from 'react-redux';
import { addGood } from '../../redux/goodsSlice';
import Alert from 'react-bootstrap/Alert';

export const NewGood: React.FC = () => {
  const dispatch = useDispatch();
  const [isSent, setIssent] = React.useState(false);

  const handleSubmit = (values: any) => {
    console.log(values)
    const newGood = {...values, id: uuid.v4()};
    dispatch(addGood(newGood));
    setIssent(true);
    setTimeout(() => {
      setIssent(false);
    }, 3000);

  };

  const schema = yup.object().shape({
    title: yup.string().required(),
    description: yup.string().required(),
    category: yup.string().required(),
    author: yup.string().email('Invalid email').required('Email is required'),
  });

  return (
    <main className='newGood'>
      <Container>
        <h1>
          Add new good
        </h1>
        <Formik
          validationSchema={schema}
          onSubmit={(values) => {
            handleSubmit(values);
          }}
          initialValues={{
            title: '',
            description: '',
            category: '',
            price: 0,
            rating: 0,
            stock: 0,
            author: ''
          }}
        >
      {({
        handleSubmit,
        handleChange,
        values,
        touched,
        errors,
      }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                required
                name="title"
                value={values.title}
                onChange={handleChange}
                isValid={touched.title && !errors.title}
                isInvalid={!!errors.title && touched.title}
              />
              {touched.title && errors.title && <div className='text-danger'>{errors.title}</div>}
            </Form.Group>
            <Form.Group as={Col} md="4">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                required
                name="description"
                value={values.description}
                onChange={handleChange}
                isValid={touched.description && !errors.description}
                isInvalid={!!errors.description && touched.description}
              />
              {touched.description && errors.description && <div className='text-danger'>{errors.description}</div>}
            </Form.Group>
            <Form.Group as={Col} md="4">
              <Form.Label>Price</Form.Label>
                <Form.Control
                  type="number"
                  name="price"
                  value={values.price}
                  onChange={handleChange}
                />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4">
              <Form.Label>Rating</Form.Label>
              <Form.Control
                type="number"
                name="rating"
                value={values.rating}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group as={Col} md="4">
              <Form.Label>Stock</Form.Label>
              <Form.Control
                type="number"
                name="stock"
                value={values.stock}
                onChange={handleChange}
              />

            </Form.Group>
            <Form.Group as={Col} md="4">
              <Form.Label>Author / email</Form.Label>
              <Form.Control
                type="email"
                required
                name="author"
                value={values.author}
                onChange={handleChange}
                isValid={touched.author && !errors.author}
                isInvalid={!!errors.author && touched.author}
              />
              {touched.author && errors.author && <div className='text-danger'>{errors.author}</div>}

            </Form.Group>

            <Form.Group as={Col} md="4">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                required
                name="category"
                value={values.category}
                onChange={handleChange}
                isValid={touched.category && !errors.category}
                isInvalid={!!errors.category && touched.category}
              />
              {touched.category && errors.category && <div className='text-danger'>{errors.category}</div>}
            </Form.Group>
          </Row>
          <Button type="submit">Submit form</Button>
        </Form>
      )}
        </Formik>
        {isSent && (
          <Alert variant="info" className='mt-4'>
            The good was added to list
          </Alert>
        )}
      </Container>
    </main>
  );
};

