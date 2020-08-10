import React, { useEffect, useState } from "react";
import Logo from "../assets/logo.svg";
import Dislike from "../assets/dislike.svg";
import Like from "../assets/like.svg";
import "./main.css";
import api from "../services/axios";

export default function Main({ match }) {
  const [users, setUsers] = useState([]);
  async function handleLike(id) {}
  async function handleDislike(id) {
    await api.post(`/devs/${id}/dislikes`, null, {
      headers: {
        user: match.params.id
      }
    });

    setUsers(users.filter(user => user._id !== id));
  }
  useEffect(() => {
    async function loadUsers() {
      const response = await api.get("/devs", {
        headers: {
          user: match.params.id
        }
      });
      setUsers(response.data);
    }
    loadUsers();
  }, [match.params.id]);

  return (
    <div className="main-container">
      <img src={Logo} alt="tindev" />
      <ul>
        {users.map(user => (
          <li key={user._id}>
            <img src={user.avatar} alt={user.name} />
            <footer>
              <strong>{user.name}</strong>
              <p>{user.bio}</p>
            </footer>
            <div className="buttons">
              <button type="button" onClick={() => handleDislike(user._id)}>
                <img src={Dislike} alt="Dislike" />
              </button>
              <button type="button" onClick={() => handleLike(user._id)}>
                <img src={Like} alt="Like" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
