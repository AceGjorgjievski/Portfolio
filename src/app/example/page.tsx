'use client';

import { useEffect, useState } from "react";

type user = {
    id: number,
    name: string,
    age: number,
    category: string,
}

export default function Example() {

    const [data, setData] = useState<user[]>([]);


    useEffect(() => {

        const fetchData = async () => {
            // const response = await fetch('https://jsonplaceholder.typicode.com/users', {
            //     method: 'GET',
            //     cache: 'no-cache'
            // });

            const usersResponse = await fetch('/users.json');

            const data = await usersResponse.json();
            setData(data);
        }


        fetchData();


    }, []);



    const render = (usersArray: user[]) => {
        const usersByCategory = groupUsersByCategory(usersArray);
        console.log(usersByCategory);
        const rootDiv = document.createElement('div');

        for (const [category, users] of Object.entries(usersByCategory)) {
            const categoryDiv = createCategory(category, users);
            rootDiv.appendChild(categoryDiv);
        }

    }



    const createCategory = (category: string, users: user[]) => {
        const divElement = document.createElement('div');

        users.forEach((user) => {
            const h2Category = document.createElement('h2');
            h2Category.textContent = `${user.category}`;
            divElement.appendChild(h2Category);

            const usernameDiv = document.createElement('div');
            const h4Username = document.createElement('h4');
            h4Username.textContent = `${user.name}`;
            usernameDiv.appendChild(h4Username);
            divElement.appendChild(usernameDiv);

            const ageDiv = document.createElement('div');
            const h4Age = document.createElement('h4');
            h4Age.textContent = `${user.age}`;
            ageDiv.appendChild(h4Age);
            divElement.appendChild(ageDiv);
        })
        divElement.append(document.createElement('hr'));


        return divElement;
    }

    const groupUsersByCategory = (users: user[]) => {
        const usersByCategory: Record<string, user[]> = {};

        users.forEach((user) => {
            if (!usersByCategory.hasOwnProperty(user.category)) {
                usersByCategory[user.category] = [user]
            } else {
                usersByCategory[user.category].push(user);
            }
        })

        return usersByCategory;
    }


    const usersByCategory = groupUsersByCategory(data);


    /**
     
        <div>
            <h2>user-category</h2>
            <div>
                <h4>username</h4>
            </div>
            <div>
                <h4>user - age</h4>
            </div>
        </div>
        <hr>

    */

    return (
        <>
            {/* {data.length > 0 && (
                <>
                    <ul>
                        {data.map((user) => {
                            return (
                                <li key={user.id}>{user.name}</li>
                            )
                        })}
                    </ul>
                </>
            )} */}
            {Object.entries(usersByCategory).map(([category, users]) => (
                <div key={category}>
                    <h2>{category}</h2>
                    {users.map((user) => {
                        return (
                            <div key={user.id}>
                                <h2>{user.name}</h2>
                                <div>
                                    <h4>{user.age}</h4>
                                </div>
                            </div>
                        );
                    })}
                </div>
            ))}
        </>
    );
}