import React from "react";
import styled from "styled-components";
import { getStatus } from "../../../utils";
import { Title, Text, Button } from "../../../styledComponents";
import { STYLES } from "../../../constains";

const ToplineStyled = styled.div`
  display: flex;
  justify-content: ${({ role }) => (role ? "space-between" : "flex-start")};
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 15px;
  max-width: 500px;
  @media screen and (max-width: ${STYLES.breakpoints.sm}) {
    flex-direction: column;
  }
  .title {
    margin-right: ${({ role }) => (role ? "0" : "20px")};
    @media screen and (max-width: ${STYLES.breakpoints.sm}) {
      margin-right: 0;
    }
  }
  p {
    @media screen and (max-width: ${STYLES.breakpoints.sm}) {
      margin: 20px 0;
    }
  }
  button {
    display: flex;
    align-items: center;
    svg {
      margin-left: 12px;
    }
  }
`;

const Topline = ({ panel, setPanel, status, role }) => {
  return (
    <ToplineStyled className="topline" role={role}>
      <Title className="title" size="22px" color="#00397E">
        Реестр:
      </Title>
      {!panel && (
        <>
          <Text weight="700" size="20px" color={getStatus(status)}>
            {status}
          </Text>
          {role > 0 && (
            <Button
              padding="0"
              border="none"
              color="#969696"
              size="18px"
              onClick={() => setPanel(true)}
              bgHover="none"
            >
              Изменить
              <svg
                width="19"
                height="19"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.40625 0C0.634766 0 0 0.634766 0 1.40625V3.5H22V1.40625C22 0.634766 21.3652 0 20.5938 0H1.40625ZM0 4.5V20C0 20.2773 0.224609 20.5 0.5 20.5H14.0938L13.4531 21.1406C13.3926 21.2012 13.3359 21.2773 13.3125 21.3594L12.4688 24.3594C12.4199 24.5332 12.4668 24.7148 12.5938 24.8438C12.6895 24.9414 12.8203 25 12.9531 25C12.9961 25 13.0352 24.9961 13.0781 24.9844L16.0781 24.1875C16.1621 24.1641 16.2344 24.1094 16.2969 24.0469L24.2031 16.2031C24.2539 16.1543 24.2871 16.0918 24.3125 16.0312L24.4062 15.9531C25.207 15.1523 25.207 13.8477 24.4062 13.0469C23.7559 12.3965 22.7734 12.2812 22 12.6875V4.5H0ZM3.5 7.5H5.5V8.5H3.5V7.5ZM7 7.5H18.5V8.5H7V7.5ZM3.5 10H5.5V11H3.5V10ZM7 10H18.5V11H7V10ZM3.5 12.5H5.5V13.5H3.5V12.5ZM7 12.5H18.5V13.5H7V12.5ZM21.875 14.125L23.375 15.625L15.6875 23.25L14.2344 21.8281L14.25 21.7656L21.875 14.125ZM3.5 15H5.5V16H3.5V15ZM7 15H16.5V16H7V15Z"
                  fill="#9D9B9B"
                />
              </svg>
            </Button>
          )}
        </>
      )}
    </ToplineStyled>
  );
};

export default Topline;
