import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function Categories() {
  return (
   <>
    <Card style={{ width: '18rem ', display:"inline-block", margin:"22px" }}>
      <Card.Img variant="top" style={{height :"200px"}} src="https://i0.wp.com/last-date.com/wp-content/uploads/2022/03/C-Programming.jpg?fit=1024%2C536&ssl=1" />
      <Card.Body>
        <Card.Title>Programming Quiz</Card.Title>
        <Card.Text>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus doloribus consequuntur perferendis voluptas, error enim earum.
        </Card.Text>
        <Button variant="primary" style={{backgroundColor :"#2B23E3"}} onClick={()=>displaycontent}>Start Quiz</Button>
      </Card.Body>
    </Card>    
   <Card style={{ width: '18rem', display:"inline-block", margin:"22px" }}>
      <Card.Img variant="top" style={{height :"200px"}} src="https://blog.hubspot.com/hs-fs/hubfs/personality-tests.jpg?width=595&height=400&name=personality-tests.jpg" />
      <Card.Body>
        <Card.Title>Personality Quiz</Card.Title>
        <Card.Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus doloribus consequuntur perferendis voluptas, error enim earum.
        </Card.Text>
        <Button variant="primary" style={{backgroundColor :"#2B23E3"}}>Start Quiz</Button>
      </Card.Body>
    </Card>


    <Card style={{ width: '18rem', display:"inline-block", margin:"22px" }}>
      <Card.Img variant="top" style={{height :"200px"}} src="https://www.umc.org/-/media/umc-media/2019/08/28/20/39/history-quiz-map.jpg?mw=1200&hash=2E4B5725ED8BB8F0BF22398A6FE5713C" />
      <Card.Body>
        <Card.Title>History Quiz</Card.Title>
        <Card.Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus doloribus consequuntur perferendis voluptas, error enim earum.
        </Card.Text>
        <Button variant="primary" style={{backgroundColor :"#2B23E3"}} >Start Quiz</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem', display:"inline-block", margin:"22px" }}>
      <Card.Img variant="top" style={{height :"200px"}} src="https://www.stoliverplunkettberagh.com/cmsfiles/items/gallery/499_o_1cq6dlk8o1jjn15urf07p0816j7d.jpeg" />
      <Card.Body>
        <Card.Title>Math Quiz</Card.Title>
        <Card.Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus doloribus consequuntur perferendis voluptas, error enim earum.
        </Card.Text><Button variant="primary" style={{backgroundColor :"#2B23E3"}}>Start Quiz</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem', display:"inline-block", margin:"22px" }}>
      <Card.Img variant="top" style={{height :"200px"}} src="https://www.riddle.com/imageservice/q_80,f_auto,c_fill,w_960,h_540/caaud6jny2y1xhiozii5" />
      <Card.Body>
        <Card.Title>Geography Quiz</Card.Title>
        <Card.Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus doloribus consequuntur perferendis voluptas, error enim earum.
        </Card.Text>
        <Button variant="primary" style={{backgroundColor :"#2B23E3"}}>Start Quiz</Button>
      </Card.Body>
    </Card>    
    <Card style={{ width: '18rem', display:"inline-block", margin:"22px" }}>
      <Card.Img variant="top" style={{height :"200px"}} src="https://api.triviacreator.com/v1/imgs/quiz/R%20(21)-9afb2ad7-855c-443f-a3ee-56d9f7ed0721.jpg" />
      <Card.Body>
        <Card.Title>Logo Quiz</Card.Title>
        <Card.Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus doloribus consequuntur perferendis voluptas, error enim earum.
        </Card.Text>
        <Button variant="primary" style={{backgroundColor :"#2B23E3"}}>Start Quiz</Button>
      </Card.Body>
    </Card>    
    <Card style={{ width: '18rem', display:"inline-block", margin:"22px" }}>
      <Card.Img variant="top" style={{height :"200px"}} src="https://kwizzbit.com/wp-content/uploads/2022/09/football.jpg.webp" />
      <Card.Body>
        <Card.Title>Football Quiz</Card.Title>
        <Card.Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus doloribus consequuntur perferendis voluptas, error enim earum.
        </Card.Text>
        <Button variant="primary" style={{backgroundColor :"#2B23E3"}}>Start Quiz</Button>
      </Card.Body>
    </Card>    
    <Card style={{ width: '18rem', display:"inline-block", margin:"22px" }}>
      <Card.Img variant="top" style={{height :"200px"}} src="https://blog.hubspot.com/hs-fs/hubfs/personality-tests.jpg?width=595&height=400&name=personality-tests.jpg" />
      <Card.Body>
        <Card.Title>Science Quiz</Card.Title>
        <Card.Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus doloribus consequuntur perferendis voluptas, error enim earum.
        </Card.Text>
        <Button variant="primary" style={{backgroundColor :"#2B23E3"}} onClick={()=>alert("Hello")}>Start Quiz</Button>
      </Card.Body>
    </Card>    
   
   </>
  );
}

export default Categories;