import Carousel from 'react-bootstrap/Carousel'
import Subscribe from './Subscribe'

const HPCarousels = () => {
  return (
    <>
      <div className="carousel">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/5380618/pexels-photo-5380618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://media.istockphoto.com/id/1437696002/photo/an-online-documentation-database-for-managing-files-knowledge-and-documentation-in-an-erp.jpg?s=612x612&w=0&k=20&c=Xi9nEe-4fLcT0aSmUqyDAiqEkmSQz7zB_nT833lHpWY="
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://media.istockphoto.com/id/951192336/photo/hand-use-laptop-with-padlock-technology.jpg?s=612x612&w=0&k=20&c=H0NXyWaXP5m4MCyslt6VNgDpteq48aM5QxFimSZU1Ac="
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Subscribe />
      </div>
    </>
  )
}
export default HPCarousels
