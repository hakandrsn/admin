import { BsClock ,BsBookmarks,BsChevronContract} from 'react-icons/bs'
import { RiUserLine,RiMoneyDollarCircleLine } from 'react-icons/ri';
import {VscGitPullRequestDraft} from 'react-icons/vsc'

export const pages =[
    {
        name:"Talep Durumu",
        path:"/works",
        icon:BsBookmarks,
        exact:true
    },
    {
        name:"Personel Gönder",
        path:"/gopersonel",
        icon:BsClock ,
        exact:true
    },
    {
        name:"Şirket İstekleri",
        path:"/request",
        icon:VscGitPullRequestDraft ,
        exact:true
    },
    {
        name:"Şirketler",
        path:"/companys",
        icon:BsChevronContract ,
        exact:true
    },
    {
        name:"Personeller",
        path:"/users",
        icon:RiUserLine,
        exact:true
    },
    {
        name:"Ödemeler",
        path:"/pricing",
        icon:RiMoneyDollarCircleLine ,
        exact:true
    }
] 