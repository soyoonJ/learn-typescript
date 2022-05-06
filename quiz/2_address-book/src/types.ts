// interface PhoneNumberDictionary {
//     // 어떤 키값이 오든, string으로 받고, 그 안에 num은 number로 받음
//     [phone: string]: {
//       num: number;
//     };
//   }
  
// export interface Contact {
//   name: string;
//     address: string;
//     phones: PhoneNumberDictionary;
//   }
  
// export enum PhoneType {
//     Home = 'home',
//     Office = 'office',
//     Studio = 'studio'
//   }

interface PhoneNumberDictionary {
    // 어떤 키값이 오든, string으로 받고, 그 안에 num은 number로 받음
    [phone: string]: {
      num: number;
    };
  }
  
interface Contact {
  name: string;
    address: string;
    phones: PhoneNumberDictionary;
  }
  
enum PhoneType {
    Home = 'home',
    Office = 'office',
    Studio = 'studio'
  }

//   한번에 export 묶어서 해주는 게 일반적
  export { Contact, PhoneType }