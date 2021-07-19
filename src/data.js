import { FaFacebook, SiReact, IoLogoNodejs, DiMongodb } from 'react-icons/all'

const data = [
  {
    id: 1,
    name: 'Saurav Kumar',
    job: 'Boss',
    image: 'https://avatars.githubusercontent.com/u/50770504?v=4',
    text: (
      <div>
        <SiReact />
        <IoLogoNodejs />
        <DiMongodb />
      </div>
    ),
  },
  {
    id: 2,
    name: 'Sauraev Shing',
    job: 'Employee',
    image:
      'https://scontent.fpat3-2.fna.fbcdn.net/v/t1.6435-9/187128552_1701381306714721_6100717332843607919_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=e3f864&_nc_ohc=L0pVEPBxt2UAX8DDWVY&_nc_ht=scontent.fpat3-2.fna&oh=d48a46d305ad489dc11969088f5c580a&oe=60D76200',
    text: <FaFacebook />,
  },
]

export default data
