


'use client';
import { viewWish } from '@/interfaces';
import Link from 'next/link';
import React, { FC, useEffect, useState } from 'react';

interface BookViewData {
  params: {
    id: any;
    uid: any;
    wishId: string;
  };
  bookWish: () => void;
}

const BookView: FC<BookViewData> = ({ params, bookWish }) => {
    let emojis = [
    '😄','😃','😀','😊','☺','😉','😍','😘','😚','😗','😙','😜','😝','😛','😳','😁','😔','😌','😒','😞','😣','😢','😂','😭','😪','😥','😰','😅','😓','😩','😫','😨','😱','😠','😡','😤','😖','😆','😋','😷','😎','😴','😵','😲','😟','😦','😧','😈','👿','😮','😬','😐','😕','😯','😶','😇','😏','😑','👲','👳','👮','👷','💂','👶','👦','👧','👨','👩','👴','👵','👱','👼','👸','😺','😸','😻','😽','😼','🙀','😿','😹','😾','👹','👺','🙈','🙉','🙊','💀','👽','💩','🔥','✨','🌟','💫','💥','💢','💦','💧','💤','💨','👂','👀','👃','👅','👄','👍','👎','👌','👊','✊','✌','👋','✋','👐','👆','👇','👉','👈','🙌','🙏','☝','👏','💪','🚶','🏃','💃','👫','👪','👬','👭','💏','💑','👯','🙆','🙅','💁','🙋','💆','💇','💅','👰','🙎','🙍','🙇','🎩','👑','👒','👟','👞','👡','👠','👢','👕','👔','👚','👗','🎽','👖','👘','👙','💼','👜','👝','👛','👓','🎀','🌂','💄','💛','💙','💜','💚','❤','💔','💗','💓','💕','💖','💞','💘','💌','💋','💍','💎','👤','👥','💬','👣','💭','🐶','🐺','🐱','🐭','🐹','🐰','🐸','🐯','🐨','🐻','🐷','🐽','🐮','🐗','🐵','🐒','🐴','🐑','🐘','🐼','🐧','🐦','🐤','🐥','🐣','🐔','🐍','🐢','🐛','🐝','🐜','🐞','🐌','🐙','🐚','🐠','🐟','🐬','🐳','🐋','🐄','🐏','🐀','🐃','🐅','🐇','🐉','🐎','🐐','🐓','🐕','🐖','🐁','🐂','🐲','🐡','🐊','🐫','🐪','🐆','🐈','🐩','🐾','💐','🌸','🌷','🍀','🌹','🌻','🌺','🍁','🍃','🍂','🌿','🌾','🍄','🌵','🌴','🌲','🌳','🌰','🌱','🌼','🌐','🌞','🌝','🌚','🌑','🌒','🌓','🌔','🌕','🌖','🌗','🌘','🌜','🌛','🌙','🌍','🌎','🌏','🌋','🌌','🌠','⭐','☀','⛅','☁','⚡','☔','❄','⛄','🌀','🌁','🌈','🌊','🎍','💝','🎎','🎒','🎓','🎏','🎆','🎇','🎐','🎑','🎃','👻','🎅','🎄','🎁','🎋','🎉','🎊','🎈','🎌','🔮','🎥','📷','📹','📼','💿','📀','💽','💾','💻','📱','☎','📞','📟','📠','📡','📺','📻','🔊','🔉','🔈','🔇','🔔','🔕','📢','📣','⏳','⌛','⏰','⌚','🔓','🔒','🔏','🔐','🔑','🔎','💡','🔦','🔆','🔅','🔌','🔋','🔍','🛁','🛀','🚿','🚽','🔧','🔩','🔨','🚪','🚬','💣','🔫','🔪','💊','💉','💰','💴','💵','💷','💶','💳','💸','📲','📧','📥','📤','✉','📩','📨','📯','📫','📪','📬','📭','📮','📦','📝','📄','📃','📑','📊','📈','📉','📜','📋','📅','📆','📇','📁','📂','✂','📌','📎','✒','✏','📏','📐','📕','📗','📘','📙','📓','📔','📒','📚','📖','🔖','📛','🔬','🔭','📰','🎨','🎬','🎤','🎧','🎼','🎵','🎶','🎹','🎻','🎺','🎷','🎸','👾','🎮','🃏','🎴','🀄','🎲','🎯','🏈','🏀','⚽','⚾','🎾','🎱','🏉','🎳','⛳','🚵','🚴','🏁','🏇','🏆','🎿','🏂','🏊','🏄','🎣','☕','🍵','🍶','🍼','🍺','🍻','🍸','🍹','🍷','🍴','🍕','🍔','🍟','🍗','🍖','🍝','🍛','🍤','🍱','🍣','🍥','🍙','🍘','🍚','🍜','🍲','🍢','🍡','🍳','🍞','🍩','🍮','🍦','🍨','🍧','🎂','🍰','🍪','🍫','🍬','🍭','🍯','🍎','🍏','🍊','🍋','🍒','🍇','🍉','🍓','🍑','🍈','🍌','🍐','🍍','🍠','🍆','🍅','🌽','🏠','🏡','🏫','🏢','🏣','🏥','🏦','🏪','🏩','🏨','💒','⛪','🏬','🏤','🌇','🌆','🏯','🏰','⛺','🏭','🗼','🗾','🗻','🌄','🌅','🌃','🗽','🌉','🎠','🎡','⛲','🎢','🚢','⛵','🚤','🚣','⚓','🚀','✈','💺','🚁','🚂','🚊','🚉','🚞','🚆','🚄','🚅','🚈','🚇','🚝','🚋','🚃','🚎','🚌','🚍','🚙','🚘','🚗','🚕','🚖','🚛','🚚','🚨','🚓','🚔','🚒','🚑','🚐','🚲','🚡','🚟','🚠','🚜','💈','🚏','🎫','🚦','🚥','⚠','🚧','🔰','⛽','🏮','🎰','♨','🗿','🎪','🎭','📍','🚩','⬆','⬇','⬅','➡','🔠','🔡','🔤','↗','↖','↘','↙','↔','↕','🔄','◀','▶','🔼','🔽','↩','↪','ℹ','⏪','⏩','⏫','⏬','⤵','⤴','🆗','🔀','🔁','🔂','🆕','🆙','🆒','🆓','🆖','📶','🎦','🈁','🈯','🈳','🈵','🈴','🈲','🉐','🈹','🈺','🈶','🈚','🚻','🚹','🚺','🚼','🚾','🚰','🚮','🅿','♿','🚭','🈷','🈸','🈂','Ⓜ','🛂','🛄','🛅','🛃','🉑','㊙','㊗','🆑','🆘','🆔','🚫','🔞','📵','🚯','🚱','🚳','🚷','🚸','⛔','✳','❇','❎','✅','✴','💟','🆚','📳','📴','🅰','🅱','🆎','🅾','💠','➿','♻','♈','♉','♊','♋','♌','♍','♎','♏','♐','♑','♒','♓','⛎','🔯','🏧','💹','💲','💱','©','®','™','〽','〰','🔝','🔚','🔙','🔛','🔜','❌','⭕','❗','❓','❕','❔','🔃','🕛','🕧','🕐','🕜','🕑','🕝','🕒','🕞','🕓','🕟','🕔','🕠','🕕','🕖','🕗','🕘','🕙','🕚','🕡','🕢','🕣','🕤','🕥','🕦','✖','➕','➖','➗','♠','♥','♣','♦','💮','💯','✔','☑','🔘','🔗','➰','🔱','🔲','🔳','◼','◻','◾','◽','▪','▫','🔺','⬜','⬛','⚫','⚪','🔴','🔵','🔻','🔶','🔷','🔸','🔹'
    ]
  const getRandomEmoji = () => emojis[Math.floor(Math.random() * emojis.length)];
  const randomEmojis = Array.from({ length: 5 }, getRandomEmoji).join('');

  const [wish, setWish] = useState<viewWish | null>(null);
  const [wishData, setWishData] = useState({
    to: '',
    verification_code: randomEmojis
  });
  const [enteredCode, setEnteredCode] = useState('');
  const [isSendCode, setIsSendCode] = useState<boolean>(true)
  const [isVerify, setIsVerify] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(true);
  const [verificationSuccess, setVerificationSuccess] = useState<boolean | null>(null);

  useEffect(() => {
    const fetchWish = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/wishlist/${params.id}/wish/${params.wishId}`);
        const data = await response.json();
        setWish(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchWish();
  }, [params.id, params.wishId]);

  const sendVerificationEmail = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/send`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(wishData)
      });
      setIsVerify(true)
      setIsSendCode(false)

      const result = await response.json();
      return result;
    
    } catch (error) {
      console.log('Error sending email', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWishData({
      ...wishData,
      [e.target.name]: e.target.value
    });
  };

  const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredCode(e.target.value);
  };

  const handleVerifyCode = () => {
    if (enteredCode === wishData.verification_code) {
      setVerificationSuccess(true);
      alert("You're verified and booked it 😀")
      bookWish();
    } else {
      setVerificationSuccess(false);
    }
  };

  return (
   <>
   {wish?.isBooked ? (
    <div className='w-full h-svh bg-green-200  flex items-center justify-center '>
      <div className='w-80 h-80   rounded-lg flex flex-col items-center justify-between  p-2 mb-2'>
        <p className='text-9xl '>😅</p>
        <p className='text-3xl text-black text-center  '>Oops, but  present has already booked </p>
        <Link href={`/view/${params.id}`}>
        <button className='w-60 h-10 bg-green-400 rounded-md hover:shadow-xl mt-3'>
          <p>Back & book another</p>
        </button>
        </Link>
      </div>

    </div>
   ):(
        <>
        {
          isSendCode &&    <div>
          <div className='w-64 h-8 flex items-center justify-end mb-3'>
            <Link href={`/view/${params.id}`}>
              <button className='w-5 h-5 bg-black rounded-full relative left-10'>
                <p className='text-mini text-white font-medium'>x</p>
              </button>
            </Link>
          </div>
          <div className='sm:w-72 w-72 sm:h-60 h-64 rounded-lg border shadow-md flex flex-col justify-between p-4'>
            <div className='w-auto h-auto flex items-center'>
              <div className='w-7 h-7 bg-green-200 rounded flex items-center justify-center'>
                <p>🎁</p>
              </div>
              <h2 className='text-lg text-black pl-2'>{wish?.title}</h2>
            </div>
            <input
              type='email'
              name='to'
              id='to'
              value={wishData.to}
              onChange={handleChange}
              className='w-full h-10 text-sm text-black rounded flex border resize-none outline-none pl-1'
              placeholder='Write your email for validation'
            />
    
            <div>
              {wish?.isBooked ? (
                <div className='w-24 h-8 bg-green-200 rounded flex items-center justify-centers'>booked</div>
              ) : (
                <div className='w-full flex items-center'>
                  <div className='w-24 h-8 bg-red-200 text-red-400 text-sm rounded flex items-center justify-center '>
                    not booked
                  </div>
                  {
                    wish?.grade &&   
                     <div className='w-24 h-8 bg-green-200 text-green-700 text-sm rounded flex items-center justify-center ml-2'>
                    {wish?.grade}
                  </div>
                  }
                
    
                </div>
              )}
            </div>
    
          
    
            <button onClick={sendVerificationEmail} className='w-full h-11 bg-black text-md text-white font-medium rounded'>
              Book
            </button>
    
    
          </div>
        </div>
        }
     
        {
          isVerify &&  <div className='w-56 min-h-36 h-auto  flex flex-col items-center justify-around'>
          <h2 className='text-xl text-black'>Verify code 😂</h2>
    
    
            <input
              type='text'
              name='enteredCode'
              id='enteredCode'
              value={enteredCode}
              onChange={handleCodeChange}
              className='w-full h-10 text-sm text-black rounded flex border resize-none outline-none pl-1 mt-3'
              placeholder='Enter verification code'
            />
    
            <button onClick={handleVerifyCode} className='w-full h-11 bg-green-300 text-md font-medium rounded mt-2'>
              Verify 
            </button>
    
            {verificationSuccess === true && <p className='text-green-500 mt-2'>Verification successful! You booked it</p>}
            {verificationSuccess === false && <p className='text-red-500 mt-2'>Verification failed. Try again.</p>}
        </div>
        }
        
        </>
   )}


    </>

  );
};

export default BookView;
