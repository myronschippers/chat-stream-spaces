import { useNavigate } from 'react-router-dom';

import { USERS } from '@/data';
import { saveToStorage } from '@/utils/storage.utils';

import { StyledMain } from './styles';

export default function StartPage() {
  const navigate = useNavigate();

  const onClickUser = (id: string) => {
    saveToStorage('user', id);
    navigate('/spaces');
  };

  return (
    <StyledMain>
      <h1>Select a user</h1>
      <div className="users">
        {USERS.map((userItem) => (
          <button
            onClick={() => onClickUser(userItem.id)}
            className="user"
            key={userItem.id}
          >
            <div className="user--avatar">
              <img src={userItem.image} />
            </div>
            <span className="user--name">{userItem.name}</span>
          </button>
        ))}
      </div>
    </StyledMain>
  );
}
