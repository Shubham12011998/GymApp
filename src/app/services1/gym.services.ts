import { EventEmitter, Injectable } from '@angular/core';
import { Gym } from '../model1/gym.model';

@Injectable({
  providedIn: 'root',
})
export class GymService {
  gym: Gym[] = [
    new Gym(
      1,
      'DUMBLES',
      'The dumbbell, a type of free weight, is a piece of equipment used in weight training. It can be used individually or in pairs, with one in each hand.',
      'https://images.unsplash.com/photo-1544033527-b192daee1f5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    ),
    new Gym(
      2,
      'TRADEMILL',
      'Exercise equipment is any apparatus or device used during physical activity to enhance the strength or conditioning effects of that exercise by providing either fixed or adjustable amounts of resistance, or to otherwise enhance the experience or outcome of an exercise routine.',
      'https://media.istockphoto.com/photos/treadmills-in-a-row-picture-id80488814?b=1&k=20&m=80488814&s=170667a&w=0&h=ATsAdmum0nkESCrnA-FQssxgKk-RgDWQr6LY2rVBuHE='
    ),
    new Gym(
      3,
      'SQUAT POWER RACK',
      'Squat Power Rack is affordable and occupies lesser space as compared to a full rack. It is usually meant to help with squats and bench press. However, it can used for various other exercises. eg. shoulder press, push press etc',
      'https://media.istockphoto.com/photos/squat-rack-picture-id458944847?b=1&k=20&m=458944847&s=170667a&w=0&h=EnZcGta0AtF-MQM1RFHE747ZWfiyBfMtmcK-sp0j9jI='
    ),
    new Gym(
      4,
      'BARBELL',
      'A barbell is probably the most versatile equipment in any gym. It makes sure that you maintain a good posture and keep your body from swaying when exercising. You can literally do all desirable exercise with barbells. The most common exercises are divided into: Powerlifting - squats, bench press & deadlifts, and Weightlifting - clean & jerk & snatches.',
      'https://media.istockphoto.com/photos/barbell-picture-id506134950?b=1&k=20&m=506134950&s=170667a&w=0&h=EkelSyvjbZxepcznKwR8-uCycqGU3u1uX8QkrSFNM1c='
    ),
    new Gym(
      5,
      'CHEST PRESS MACHINE',
      'The machine works the same pectoral muscles as a bench press, although the design is a bit different. You are actually pushing in front of you two mechanical arms loaded with heavy weight plates',
      'https://garagegympro.com/wp-content/uploads/2021/09/Iron-Company-SportsArt-Fitness-A977-Chest-Press-Machine.jpg'
    ),
    new Gym(
      6,
      'PEC DECK MACHINE',
      'This particular machine is designed, similarly like chest press machine, to isolate chest muscles, specifically pectoral muscles. The machine is used in a seated position with your elbows at 90 degrees and the point is to use the two mechanical arms to bring them together in front of your face.',
      'https://garagegympro.com/wp-content/uploads/2019/08/GOPLUS-Multifunction-Home-Gym-System.jpg'
    ),
    new Gym(
      7,
      'LAT PULLDOWN MACHINE',
      'These machines are especially designed to train your back and chest by pulling down a barbell via a pulley system. They are available either with included weight stack or without it. The ones without it work with either standard or Olympic weight plates.',
      'https://garagegympro.com/wp-content/uploads/2021/09/XMark-Fitness-Lat-Pulldown-Machine.jpg'
    ),
  ];
  gymSelected = new EventEmitter<Gym>();
  getGyms() {
    return this.gym;
  }
}
