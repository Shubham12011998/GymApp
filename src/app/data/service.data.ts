import { Service } from './../model/service.model';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiceData {
  services: Service[] = [
    new Service(
      0,
      'TRAINER ',
      'Fri-Sat',
      'https://media.istockphoto.com/photos/personal-trainer-helps-senior-man-with-weights-picture-id1324768879?b=1&k=20&m=1324768879&s=170667a&w=0&h=LOfI2WpPApx7Fp8aw7IgL4fZMY6tcfV9ds6qWEwJ4sA=',
      'If you’re looking to take your fitness to the next level, you may be wondering whether hiring a personal trainer is right for you.Whether you’re new to exercising or the gym is your second home, working with a personal trainer can help you reach your health and fitness goals. A certified personal trainer is someone who is trained in creating and implementing safe and effective exercise programs for their clients. In other words, they’ll help you work out and execute other lifestyle changes to reach your fitness goal.'
    ),
    new Service(
      1,
      'JUMBA ',
      'Every Fri',
      'https://images.unsplash.com/photo-1518310383802-640c2de311b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGp1bWJhJTIwZ3ltfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      'Zumba targets lots of different muscle groups at once for total body toning. Boosts your heart health. You not only get aerobic benefits (it really gets your heart rate up), you also get anaerobic benefits – the kind that help you maintain a good cardiovascular respiratory system. Helps you de-stress.'
    ),
    new Service(
      2,
      'YOGA  ',
      'Every Day',
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fHlvZ2F8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      'Yoga offers physical and mental health benefits for people of all ages. And, if you’re going through an illness, recovering from surgery or living with a chronic condition, yoga can become an integral part of your treatment and potentially hasten healing. '
    ),
    new Service(
      3,
      'CARDIO',
      'Every Sat',
      'https://media.istockphoto.com/photos/beautiful-woman-exercising-at-the-gym-running-on-a-treadmill-picture-id840874994?b=1&k=20&m=840874994&s=170667a&w=0&h=1Vcn5Xq-DFZNp3th1OeXEYgVTyjCQJ4FexAQ3ImNXPA=',
      'When paired with a heart-healthy nutrition plan, safe weight loss comes with doing regular cardio exercise. Not only are you less likely to develop diseases like diabetes, certain cancers and heart disease, but your body can more easily circulate blood. Less sitting time and more physical activity also helps you maintain a healthy weight by burning more calories throughout the day.'
    ),
    new Service(
      4,
      'STEAM ',
      'Fri-Sat',
      'https://media.istockphoto.com/photos/interior-of-finnish-sauna-classic-wooden-sauna-picture-id827324092?b=1&k=20&m=827324092&s=170667a&w=0&h=oLhhk6JYeS_Meh2oH_tag_wFQWi3euSgVrpSaKo2Yyo=',
      'For many cultures, steaming has been embraced as a social ritual to relax and connect with others. But people quickly realized that the potential benefits of steam bathing extend beyond rest and relaxation. In fact, it may provide wellness benefits in a number of ways, including promoting improved circulation, decreased stress and clearer skin, and many others.'
    ),
    new Service(
      5,
      'CROSSFIT ',
      'Fri-Sat',
      'https://media.istockphoto.com/photos/woman-doing-battle-rope-workout-at-gym-picture-id940552590?b=1&k=20&m=940552590&s=170667a&w=0&h=LGuO39P0f0MXYijovZ1TdnAQBC1mKAI7p-sFevMZ5zY=',
      'The high-intensity, multi-joint movements in CrossFit may help you gain muscle strength and stamina. Adding additional weight to your workouts can further increase muscle gain by adding stress to your muscles.CrossFit workouts often include functional exercises, or exercises that mimic movements you do in everyday life. '
    ),
    new Service(
      6,
      'CAFE ',
      'Fri-Sat',
      'https://media.istockphoto.com/photos/happy-male-filling-glasses-with-smoothies-picture-id1181280044?b=1&k=20&m=1181280044&s=170667a&w=0&h=QcCk3DnOGxAYTrFj3E7hEJ-6rBdhp81jRByweNrYLm8=',
      'Gym Hero also provide the cafe facility to the customer.We provide 100% fresh and healthy food item,all diet items have pepared by the well trained coock under the guidence of our trainer. Cafe charge is not included in the gym subscription either you can take monthly subscription of Cafe diet or you can pay day by day.  '
    ),
  ];
  serviceSelectedEvent = new EventEmitter<Service>();
  getServices(): Service[] {
    return this.services.slice();
  }
}
