import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { User } from '../types/user.models';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {


  //при загрузке всех пользователей
  setItem(key: string, users:User[]): void{
      localStorage.setItem(key, JSON.stringify(users));
  }
   //при добавлении нового пользователя
  addItem(key: string, user:User): User{
        const users = localStorage.getItem(key)

        let usersArray: User[] = []
        
        if(users) {
          usersArray = JSON.parse(users);
        }
        
        usersArray.push(user);

        localStorage.setItem(key, JSON.stringify(usersArray));

        console.log("добавлении нового пользователя");

        // if(users) {
        //   let usersArray = JSON.parse(users);
       
        //   usersArray.push(user)
        //   localStorage.setItem(key, JSON.stringify(usersArray));
        // }
    return user;   
  }

  //предназначен для получения массива пользователей из localStorage
  getItem(key: string): User[] | null {
    // Получаем данные из localStorage по ключу
      const users = localStorage.getItem(key)
      // проверка 
      if(users){
        return JSON.parse(users);
      } else {
        return null;
      }
  }//getItem

  //удаление юзерa
  removeItem(key: string, userId: number): User[] | null {
    // Получаем данные из localStorage по ключу
    const users = localStorage.getItem(key);

    if (!users) {
        // Если данных нет, возвращаем null
        return null;
    }

    // Преобразуем строку JSON в массив объектов
    let usersArray: User[] = JSON.parse(users);

    // Фильтруем массив, удаляя пользователя с заданным userId
    usersArray = usersArray.filter(user => user.id !== userId);

    // Сохраняем обновлённый массив в localStorage
    localStorage.setItem(key, JSON.stringify(usersArray));

    // Возвращаем обновлённый массив
    return usersArray;
}//removeItem

  

}
