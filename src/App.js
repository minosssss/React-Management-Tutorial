import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';

const customer = [
  {
  'id':1,
  'image':'https://placeimg.com/64/64/1',
  'name': '이민호',
  'birthday': '890923',
  'gender':'남자',
  'job':'슈퍼바이저'
},
{
  'id':2,
  'image':'https://placeimg.com/64/64/2',
  'name': '홍길동',
  'birthday': '900516',
  'gender':'남자',
  'job':'대학생'
},
{
  'id':3,
  'image':'https://placeimg.com/64/64/3',
  'name': '마이노',
  'birthday': '940907',
  'gender':'남자',
  'job':'프로그래머'
}
]


function App() {
  return (
    <div>
      {
        customer.map(c => {
          return (
            <Customer
            key={c.id}
            id={c.id}
            image={c.image}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job}
            />
          )
        })
      }
    </div>
  );
}
export default App;
