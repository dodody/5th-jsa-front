import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import comment from '../img/admin/comment.png';
import dashboard from '../img/admin/dashboard.png';
import feedback from '../img/admin/feedback.png';
import member from '../img/admin/member.png';
import image from '../img/admin/image.png';
import dashboardWindow from '../img/admin/dashboardWindow.png';
import whiteboard from '../img/admin/whiteboard.png';

export default function AdminDashboard() {
  return (
    <AdminDashboardStyle>
      <div className="dash-nav">
        <Link to="/admin">
          <img src={dashboard}></img>대시보드
        </Link>
        <Link to="/adminImage">
          <img src={image}></img>토핑사진
        </Link>
        <Link to="/adminMember">
          <img src={member}></img>회원목록
        </Link>
        <Link to="/adminComment">
          <img src={comment}></img>댓글목록
        </Link>
        <Link to="/adminFeedback">
          <img src={feedback}></img>피드백
        </Link>
      </div>
      <div className="total-window">
        <div className="window">
          <div className="all-member">
            <i>전체 회원 수</i>
            <img src={dashboardWindow} className="all-member"></img>
          </div>
          <div className="all-pizza">
            <i>전체 피자 수</i>
            <img src={dashboardWindow} className="all-pizza"></img>
          </div>
          <div className="all-feedback">
            <i>오늘 피드백</i>
            <img src={dashboardWindow} className="all-feedback"></img>
          </div>
        </div>
        <div className="window2">
          <div className="live-comment">
            <i>실시간 댓글</i>
            <img src={whiteboard} className="live-comment"></img>
          </div>
          <div className="pop-pizza">
            <i>인기 피자</i>
            <img src={whiteboard} className="pop-pizza"></img>
          </div>
        </div>
      </div>
    </AdminDashboardStyle>
  );
}
const AdminDashboardStyle = styled.div`
  background-color: #008081;
  width: 100%;
  height: 100vh;
  align-content: center;
  display: flex;
  align-items: center;
  color: white;
  font-weight: 100;
  position: fixed;
  a {
    text-decoration: none;
    color: #fff;
    display: flex;
    margin-top: 16px;
    margin-bottom: 16px;
    flex-direction: column;
    align-content: center;
    justify-content: center;
  }
  .dash-nav {
    width: 245px;
    max-height: 100vh;
    font-size: 14px;
    flex-direction: column;
    display: flex;
    align-items: center;
    align-content: center;
    position: fixed;
  }
  a img {
    max-width: 50px;
    height: auto;
    text-align: center;
  }
  .total-window {
    position: relative;
    left: 245px;
    overflow: hidden;
  }
  .window {
    position: relative;
    margin-bottom: 50px;
    display: inline-flex;
  }
  .window2 {
    display: inline-flex;
  }
  .window img {
    max-width: 345px;
    height: auto;
    @media (max-width: 1440px) {
      max-width: 245px;
    }
  }
  .all-member {
    margin-right: 37px;
  }
  .all-pizza {
    margin-right: 37px;
  }
  .live-comment {
    margin-right: 47px;
    @media (max-width: 1440px) {
      margin-right: 32px;
    }
  }
  .window2 img {
    max-width: 540px;
    height: auto;
    @media (max-width: 1440px) {
      max-width: 410px;
    }
  }

  i {
    position: absolute;
    @media (max-width: 1440px) {
      font-size: 12px;
    }
  }
`;
