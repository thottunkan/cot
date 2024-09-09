import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../../../utils/navbar/navbar.component';

@Component({
  selector: 'app-sndpcouncil-members',
  standalone: true,
  imports: [CommonModule,NavbarComponent],
  templateUrl: './sndpcouncil-members.component.html',
  styleUrl: './sndpcouncil-members.component.css'
})
export class SNDPCouncilMembersComponent {
  sndpCounsilMembers:any = 
    [
      {
        imgurl:"https://lh5.googleusercontent.com/QyoYzayXrZ5uNUFFiqj8jlOiP_Di1si483p1RYoKheLpa8y_DlIKkJevCBhQi2ILPelJVjjaQ78DVdRSa5hbuKA=w1280",
        name:"Shri P Sundaran",
        contact:"Address: Lakshmiprabha, Kadappakkada, Kollam – 691008"
      },
      {
        imgurl:"https://lh4.googleusercontent.com/oja4gLeFb27B8nd2vOeiPwGMaD7AQWLQtKzGSWgOlY8PBjAfgXWAoBkQ_v1ECnR9iIbSGRgZx3C8XwsORPqq68M=w1280",
        name:"Shri Babyram Sarovaram",
        contact:"Address: Sarovaram, Puthankattil House, Pullutt P.O, Thrissur – 680663"
      },
      {
        imgurl:"https://lh5.googleusercontent.com/6CtXLTcS9_Si2chh8AJw_1CrFMXxQX1fu-UiXihw6EHgp-g23Rrm1AJ7NUHIxWqGoeHYM1lZ15KxSYDNG17yiBw=w1280",
        name:"Shri P K Prasannan",
        contact:"Address: Poovathumkadavil, Paingodu P.O, Konathukunnu, Thrissur – 680123"
      },
      {
        imgurl:"https://lh5.googleusercontent.com/-fdZEw2Mk11MZDERLVITPkuDFBmueWZbgJ-dwNZU9L9eUuvuMYUgdQFg4IStXznBwWSRKnfT9LNJJHif39pMeGQ=w1280",
        name:"Shri Sandeep Pachayil",
        contact:"Address: Pachayil House, Kanjirathumoodu, Airakuzhi P.O, Kollam – 691559"
      },
      {
        imgurl:"https://lh3.googleusercontent.com/MdC9Pju7ts8NDKieW83Cuklh18UgQtz_wRPyTYfb8ki1a9u98bhbEsnVXIOjc9YIec_eowDLvYp_JIQLf3pFkvs=w1280",
        name:"Shri C M Babu",
        contact:"Address: Thottathil House, Perumthuruthu P.O, Kallara, Kottayam – 686611"
      },
      {
        imgurl:"https://lh5.googleusercontent.com/7EfPaydW1RLd7U7p32M8_nJPoStZXGhD4h-1fK5CU6GgdWmnIq1JqYVoniXsMQiiaTUwOcKHyn61evJwc_eQT58=w1280",
        name:"Shri Abyin Ambadiyil",
        contact:"Address: Ambadiyil New Bungalow, Pannivizha, MG Road, Adoor P.O, Pathanamthitta – 691523"
      },
      {
        imgurl:"https://lh4.googleusercontent.com/W0vF240rR-D1uqQU9Dv5oI45XTYgvh8MRWC69ZnR8IGRCehVzi2-QGmLb-36i7dAYjPf10uvYZfSM1o2K0YH6W8=w1280",
        name:"Smt. Sheeba Teacher",
        contact:"Address: Chethiparambil, Thuruthippuram, Moothakunnan P.O, Ernakulam – 683516"
      },
      {
        imgurl:"https://lh4.googleusercontent.com/JiqLqpyw7c__r6u6uE0qMOhTTaCEagHNOLYwU3l06V5ZeKZhz9bg8SMtgFX7r4GfG2XDuXa5XuSkIqQthI4rpJM=w1280",
        name:"Shri D Vipinraj",
        contact:"Address: Subash Mandiram, Kilimanoor, Thiruvananthapuram – 695601"
      },
      {
        imgurl:"https://lh3.googleusercontent.com/UodXThWlWDZIf2r2WUW_5oFb7gvv7Lk1tLrtdlztLjOhS5pVK0Ov7cztFdQX9k-qpuWJ5Nt70ZMkALGqaIaj85I=w1280",
        name:"Shri A G Thankappan",
        contact:"Address: Aakkalathil, Guru Nivas, Manarcadu P.O, Kottayam – 686109"
      },
      {
        imgurl:"https://lh5.googleusercontent.com/ZGbHsk94kNUFttNFE9luj-TXECkoh9_iBCTkcJSariUx4L0G9JLoHf93pLiVM0BJvoha537OJFchu6EMkbN0os8=w1280",
        name:"Shri P T Manmadhan",
        contact:"Address: Pulimchuvattil, Pallippuram, Cherthala – 688541"
      },
      {
        imgurl:"https://lh5.googleusercontent.com/n0BWYhq2LNVYQxy2uXtId8k6ffdocbcRJlkVdmSvEh-V6xlE_a0oS0HevQ0cUohVNs6oKDJObWZNKmTlIAaTZWs=w1280",
        name:"Shri P S N Babu",
        contact:"Address: Lakshmi Nivas, Chethi P.O, Kanichukulangara, Cherthala – 688530"
      },
    ]
  
}
