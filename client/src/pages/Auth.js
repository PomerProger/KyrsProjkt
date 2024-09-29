import React, {useContext, useState} from 'react';
import Container from "react-bootstrap/Container";
import {Button, Form, Row} from "react-bootstrap";
import Card from "react-bootstrap/Card"
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {login, registration} from "../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";


const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation();
    const navigate = useNavigate()
    const isLogin = location.pathname === LOGIN_ROUTE;
    // исправил состояния на правильные переменные: email и password
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(email, password);
            }
            user.setUser(data);
            user.setIsAuth(true);
            navigate(SHOP_ROUTE);
        } catch (e){
            alert(e.response.data.message);
        }
    }

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{ height: '90vh' }}
        >

            <Card style={{width: 600}} className={"p-5"}>
                <h2 className="m-auto"> {isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-2"
                        placeholder="Введите ваш Email"
                        value={email} // исправлено на email
                        onChange={e=> setEmail(e.target.value)}
                    />
                    <Form.Control
                        className="mt-2"
                        placeholder="Введите ваш пароль"
                        value={password} // исправлено на password
                        onChange={e=> setPassword(e.target.value)}
                        type="password" // Добавлен тип поля для пароля
                    />
                    <Row className="d-flex justify-content-between mt-3">
                        {isLogin ?
                            <div>
                                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйтесь!</NavLink>
                            </div>
                            :
                            <div>
                                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
                            </div>
                        }
                        <Button
                            onClick={click} // Связываем функцию click с кнопкой
                            className="mt-2"
                            variant="outline-success"
                        >
                            {isLogin ? 'Войти' : 'Регистрация'}
                        </Button>
                    </Row>
                </Form>
            </Card>
        </Container>
    );
});

export default Auth;