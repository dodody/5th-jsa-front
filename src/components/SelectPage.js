import React, { useState } from 'react';
import styled from 'styled-components';
import expand from 'img/select/expand.png';
import contract from 'img/select/contract.png';
import dough from 'img/select/dough.png';
import submitbtn from 'img/select/submitbtn.png';
import submitbtnHover from 'img/select/submitbtnHover.png';
import steak from 'img/sample/steak.png';
import toTop from 'img/select/toTop.png';
import toBottom from 'img/select/toBottom.png';
import line from 'img/select/line.png';

// ! title의 숫자는 데이터 갯수 체크해서 업데이트 되는걸로 하기
const toppingGroup = [
  { title: '소스 (4)', name: 'sauce' },
  { title: '치즈 (16)', name: 'cheese' },
  { title: '고기 (11)', name: 'meat' },
  { title: '해산물 (5)', name: 'seafood' },
  { title: '야채 (18)', name: 'vegetable' },
  { title: '기타 (8)', name: 'etc' },
];
export default function SelectPage({
  smallToppings,
  handleDrag,
  submitTopping,
}) {
  const [visible, setVisible] = useState(true);
  return (
    <SelectPageStyle className="SelectPage">
      <SelectTopping smallToppings={smallToppings} handleDrag={handleDrag} />
      <div className="large_topping">
        <img src={dough} alt="doughImg" className="img-dough" />

        {visible && <div className="text-dough">토핑을 여기 올려주세요</div>}

        {submitTopping.map((val, i) => (
          <img
            src={val.resultImage}
            alt="largeToping"
            key={i}
            className="img-largeTopping"
            onMouseOver={() => setVisible(false)}
          />
        ))}
      </div>
      <SubmitBtn /> {/* 제출하기 버튼 */}
      <SelectedTopping
        submitTopping={submitTopping}
        smallToppings={smallToppings}
      />
      {/* 선택된 토핑 리스트 */}
      <Snackbar /> {/* 안내 멘트 */}
    </SelectPageStyle>
  );
}

function SelectTopping({ smallToppings, handleDrag }) {
  const [open, setOpen] = useState(true);
  return (
    <>
      {/* select box */}
      {open && (
        <SelectToppingStyle>
          {toppingGroup.map((val, i) => (
            <SelectToppingMenu
              key={i}
              smallToppings={smallToppings}
              val={val}
              handleDrag={handleDrag}
            />
          ))}
        </SelectToppingStyle>
      )}
      {/* select box를 열고 닫는 버튼 */}
      <SelectToppingCloseBtnStyle open={open} onClick={() => setOpen(!open)}>
        <img src={open ? expand : contract} alt="close" />
      </SelectToppingCloseBtnStyle>
    </>
  );
}

function SelectToppingMenu({ smallToppings, val, handleDrag }) {
  const [open, setOpen] = useState(true);
  return (
    <>
      <div className="topping-title" onClick={() => setOpen(!open)}>
        {val.title}
        <i className="material-icons">arrow_drop_down</i>
      </div>
      {open &&
        smallToppings[val.name].map((topping, idx) => (
          <div className="topping-item" key={idx}>
            <div
              className={`circle ${topping.name} `}
              draggable
              onDragStart={() => handleDrag(topping.name)}
            >
              <img src={topping.image} alt="topping" width="50" />
            </div>
            <span>{topping.name}</span>
          </div>
        ))}
    </>
  );
}

function SubmitBtn() {
  const [submit, setSubmit] = useState(false);
  return (
    <div
      className="SubmitBtn"
      onMouseOver={() => setSubmit(true)}
      onFocus={() => setSubmit(true)}
      onMouseLeave={() => setSubmit(false)}
    >
      {submit && <div className="SubmitBtnText ml-1">피자 굽기!!</div>}
      <div className="pointer" onClick={() => submitbtn && console.log(2)}>
        <img src={submit ? submitbtnHover : submitbtn} alt="submit btn" />
      </div>
    </div>
  );
}

function Snackbar() {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  return (
    openSnackbar && (
      <SnackbarStyle onClick={() => setOpenSnackbar(false)}>
        <i className="material-icons">report_problem</i>
        피자가 무거워요! 토핑을 더이상 추가할 수 없습니다!
        <i className="material-icons">report_problem</i>
      </SnackbarStyle>
    )
  );
}

function SelectedTopping({ submitTopping, smallToppings, val }) {
  return (
    <SelectedToppingStyle>
      {/* 스크롤 업 하거나, 스크롤 다운하는 기능이 필요합니다. */}
      <div className="icon">
        <img src={toTop} alt="totop" draggable="false" />
      </div>

      <div className="selected-section">
        {submitTopping.map(index => (
          <div className="selected" key={index}>
            <img src={line} alt="line" className="delete" />
            <img src={smallToppings} alt="test" className="selectedTopping" />
          </div>
        ))}
      </div>

      <div className="icon">
        <img src={toBottom} alt="toBottom" />
      </div>
    </SelectedToppingStyle>
  );
}

const SelectPageStyle = styled.div`
  position: relative;
  .large_topping {
    /* 더 높은 해상도에서는 다르게 보이게 해주어야 합니다. */
    position: relative;
    z-index: 0;
    left: 0%;
    bottom: -100%;
    min-width: 1024.5px;
    height: auto;
    margin-left: 25%;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .img-largeTopping {
      right: 12.5%;
      bottom: 15%;
      max-width: 45%;
      min-width: 45%;
      height: auto;
      position: fixed;
    }
    .img-dough {
      position: fixed;
      min-width: 60%;
      max-width: 60%;
      height: auto;
      bottom: 0%;
      right: 0%;
    }
    .text-dough {
      display: inline;
      position: fixed;
      min-width: 15%
      max-width: 15%;
      height: auto;
      bottom: 35%;
      right: 28%;
      text-align: center;
      font-size: 20px;
      background-color: rgba(0, 0, 0, 0.5);
      color: #fff;
      
    }
  }

  .SubmitBtn {
    position: absolute;
    bottom: 20px;
    right: 30px;
    display: flex;
    align-items: flex-end;
    user-select: none;
    img {
      user-select: none;
      width: 110px;
    }
    .SubmitBtnText {
      user-select: none;
      background-color: rgba(0, 0, 0, 0.5);
      border-radius: 100px;
      color: white;
      padding: 5px 24px;
      margin-right: 10px;
    }
  }
`;

const SnackbarStyle = styled.div`
  position: absolute;
  top: 22px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-size: 14px;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 12px 35px;
  z-index: 12;
  i {
    vertical-align: bottom;
    margin: 0 10px;
  }
`;

const SelectedToppingStyle = styled.div`
  position: absolute;
  top: 100px;
  right: 23px;
  width: 80px;
  height: 60%;
  border-radius: 100px;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
  .icon {
    margin: 10px 0;
    user-select: none;
    &:hover {
      opacity: 0.2;
    }
  }
  .selected-section {
    height: 384px;
    overflow: auto;
    .selected {
      border-radius: 100px;
      background-color: rgba(0, 0, 0, 0.2);
      width: 60px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 8px;
      // margin-left: 9px;
      user-select: none;
      .selectedTopping {
        width: 40px;
      }
      .delete {
        display: none;
      }
      &:hover {
        background-color: #b93030;
        .selectedTopping {
          display: none;
        }
        .delete {
          display: block;
        }
      }
    }
  }
`;

const SelectToppingStyle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 420px;
  height: 100vh;
  overflow: auto;
  background-image: linear-gradient(
    114deg,
    rgba(0, 0, 0, 0.3),
    rgba(0, 0, 0, 0.6)
  );
  color: #fff;
  z-index: 10;
  padding-left: 29px;
  i {
    vertical-align: bottom;
  }
  .topping-title {
    font-weight: bold;
    cursor: pointer;
    margin-bottom: 14px;
    margin-top: 8px;
  }
  .topping-item {
    height: 97px;
    width: 60px;
    display: inline-flex;
    flex-direction: column;
    margin-right: 16px;
    text-align: center;
    .circle {
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 50%;
      width: 60px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 0.1s ease;
      &:hover {
        background-color: rgba(0, 0, 0, 0.1);
      }
    }
    span {
      color: white;
      font-size: 11px;
      margin-top: 6px;
      line-height: 1.1;
      display: block;
    }
  }
  .closeBtn {
    width: 50px;
    height: 100px;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const SelectToppingCloseBtnStyle = styled.div`
  z-index: 10;
  position: absolute;
  width: 40px;
  height: 80px;
  background-color: rgba(0, 0, 0, 0.53);
  top: 50%;
  left: ${props => (props.open ? '420px' : '0px')};
  transform: translateY(-50%);
  border-radius: 0 100px 100px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  img {
    width: 8px;
    margin-left: -13px;
  }
`;
