import React from 'react';
import Header from './Components/Header/Header';
import {Routes, Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import Orders from './Components/Orders/Orders';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <div className='bg-gray-900 '>
      <Header></Header>
       
      <Routes>
        <Route path = "/" element = { <Home /> } />
        <Route path = "/home" element = { <Home /> } />
        <Route path = "/orders" element = { <Orders /> } />
        <Route path='*' element = {<NotFound></NotFound>}></Route>
      </Routes>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio dolorem perspiciatis nostrum vero ducimus cupiditate quod pariatur tempora unde maxime dolore soluta aperiam qui hic magnam asperiores, aliquam iste nulla consectetur voluptatum nobis sit provident necessitatibus dignissimos? Nisi consequatur suscipit similique veritatis, assumenda at, ipsam quam iusto minus, vel sequi. Natus repellat minima sequi eum consectetur laudantium, repellendus consequuntur. Magni, pariatur magnam saepe porro voluptatem adipisci voluptatum voluptates sit. Omnis et ipsam ea hic aliquid, quia facilis non nihil distinctio modi consequuntur unde, enim amet. Repudiandae commodi iure, a quaerat est recusandae saepe soluta sed voluptatibus tempora dolorem, non voluptatum rerum ea. Quos, corporis aliquid corrupti recusandae, id harum pariatur, accusamus distinctio autem quasi sunt ea eum. Dolorum, modi. Dolorem doloremque quae voluptatem recusandae quis reiciendis velit odio, libero voluptate veniam explicabo delectus a saepe obcaecati atque cupiditate, maiores similique assumenda impedit. Veritatis minus odio corrupti delectus accusantium sequi obcaecati! Cumque labore nisi, atque incidunt, fugit temporibus modi, dolor quae animi corrupti expedita vel nulla nam esse. Asperiores iusto nihil, repellat nulla sunt reprehenderit voluptates nemo rerum illum cum officiis alias esse itaque quas est culpa nesciunt? Quibusdam porro debitis assumenda impedit numquam eum deleniti pariatur, in dolores obcaecati doloremque, deserunt quaerat dignissimos. Illum, fugit modi similique possimus ab sed quo unde in atque expedita! Ullam excepturi illum atque pariatur sequi repellendus perspiciatis nobis reprehenderit quod inventore, officia itaque, laudantium libero veritatis eligendi consequuntur dolore corrupti quas culpa assumenda, in a saepe magni accusamus? Tempora sunt, qui quae distinctio deserunt molestias officia recusandae perferendis tempore voluptatem. Magnam, accusantium? Iure quod illum cum fuga nihil optio quibusdam veniam voluptate tempore? Aliquam repudiandae dicta in soluta impedit ut ex ducimus voluptatibus veritatis reiciendis distinctio, qui, necessitatibus ab incidunt quam temporibus beatae animi quasi fugiat laboriosam. Quia illum laboriosam repellendus itaque nemo, nisi nesciunt hic quaerat neque nihil ipsa corrupti voluptas perspiciatis et tempore non molestiae labore unde vitae blanditiis iusto iure. Quidem eaque accusantium sint eligendi ea, sed, labore minima, neque culpa nam temporibus possimus. Debitis nesciunt harum neque eos, quasi quia libero dolores perferendis rem illum pariatur accusantium rerum omnis deleniti unde veniam illo aliquid soluta voluptatum fugit animi perspiciatis. Quae sint eveniet id molestias iure porro cupiditate, libero odit quidem ea praesentium, hic eaque temporibus dolor iste, molestiae voluptas! Quas minima nam nesciunt quisquam, quaerat cumque expedita repudiandae quis commodi rerum! Iusto magni quam eum suscipit odio amet dolorum, quos, esse, inventore beatae maxime reprehenderit tenetur iste quisquam? A rerum voluptate earum! Fugiat deleniti dolores animi quos iusto veniam cum sapiente, sit blanditiis placeat! Ipsam ullam magnam tempore earum suscipit cupiditate necessitatibus autem quos excepturi minima iste fugiat molestias numquam nulla deserunt dolorum voluptates, eaque porro alias cum accusantium rem? Accusantium, ipsam nihil. Deleniti aperiam eos ullam dolorum suscipit, iusto dolor ut mollitia magnam! Saepe aspernatur aliquam cumque maxime eius nostrum accusamus ut consequatur commodi suscipit! Facilis, fugiat nemo! Beatae esse laboriosam animi, assumenda ratione voluptate placeat neque. Laborum nisi nam non suscipit doloremque fugiat ratione possimus distinctio vel! Accusantium?
      </p>
    </div>
  );
}

export default App;
