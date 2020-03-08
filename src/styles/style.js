import styled from "styled-components";

export const Title = styled.p`
  font-size: 1.3em;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
`;

export const Content = styled.div`
  margin-left: 310px;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
`;

export const Button = styled.button`
  background: ${props => (props.primary ? "#2D96C4" : "#E3E5E3")};
  color: ${props => (props.primary ? "#FDFFFC" : "#000000")};
  font-size: 1em;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  margin: 1em;
  padding: 0.5em 2em;
  border: 1px solid ${props => (props.primary ? "#2D96C4" : "#E3E5E3")};
  border-radius: 4px;

  &.button-success,
  &.button-error,
  &.button-warning,
  &.button-secondary {
    color: white;
    border-radius: 4px;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  }

  &.button-success {
    background: rgb(28, 184, 65); /* this is a green */
  }

  &.button-error {
    background: rgb(202, 60, 60); /* this is a maroon */
  }

  &.button-warning {
    background: rgb(234, 152, 0); /* this is an orange */
  }

  &.button-secondary {
    background: rgb(132, 132, 132); /* this is a pastel gray */
  }
`;

export const Container = styled.div`
  display: flex;
  margin-left: 50px;
`;

export const Card = styled.div`
  width: 350px;
  height: 250px;
  background-color: #fff;
  background: linear-gradient(#f8f8f8, #fff);
  box-shadow: 0 8px 16px -8px rgba(0, 0, 0, 0.4);
  border-radius: 6px;
  overflow: hidden;
  position: relative;
  margin: 1.5rem;

  & h1 {
    text-align: center;
  }
`;

export const Text = styled.div`
  background: #fff;
  font-size: 1em;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  padding: 20px;
  min-height: 200px;
`;

export const Nav = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #2989b3;
  color: #fff;
  padding: 1em;
`;

export const Logo = styled.img`
  width: inherit;
`;

export const Box = styled.div`
  border: 1px solid #2989b3;
  border-radius: 4px;
  font-size: 30px;
  padding: 1em;
  position: relative;
  margin-bottom: 0.25em;
  vertical-align: top;
`;

export const Loader = styled.div`
  background: #2989b3;
  position: relative;
  animation: & 1s ease-in-out infinite;
  animation-delay: 0.4s;
  width: 0.25em;
  height: 0.5em;
  margin: 0 0.5em;
  &:after,
  &:before {
    content: "";
    position: absolute;
    width: inherit;
    height: inherit;
    background: inherit;
    animation: inherit;
  }
  &:before {
    right: 0.5em;
    animation-delay: 0.2s;
  }
  &:after {
    left: 0.5em;
    animation-delay: 0.6s;
  }

  @keyframes & {
    0%,
    100% {
      box-shadow: 0 0 0 #2989b3, 0 0 0 #2989b3;
    }
    50% {
      box-shadow: 0 -0.25em 0 #2989b3, 0 0.25em 0 #2989b3;
    }
  }
`;

export const Sidebar = styled.aside`
  position: absolute;
  width: 17em;
  height: 100%;
  top: 0;
  overflow: hidden;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  background-color: #ea7900;
  -webkit-transform: translateZ(0);
  visibility: visible;
  -webkit-backface-visibility: hidden;
`;

export const SideNav = styled.nav`
  position: fixed;
  background-color: #19222a;
  height: 100%;
  font-weight: 400;
  font-size: 1.2em;
  overflow: auto;
  padding-bottom: 6em;
  z-index: 9;
  overflow: hidden;
  -webkit-overflow-scrolling: touch;

  ul {
    list-style: none;
    display: block;
    padding: 0;
    margin: 0;

    li {
      margin-left: 0;
      padding-left: 0;
      //min-width: 13em;
      display: inline-block;
      width: 100%;

      a {
        color: rgba(255, 255, 255, 0.9);
        font-size: 0.75em;
        padding: 1.05em 1em;
        position: relative;
        display: block;

        &:hover {
          background-color: rgba(0, 0, 0, 0.9);
          @include transition(all 0.6s ease);
        }
      }

      i {
        font-size: 1.8em;
        padding-right: 0.5em;
        width: 9em;
        display: inline;
        vertical-align: middle;
      }
    }
  }

  & > ul > li > a:after {
    content: "\f125";
    font-family: ionicons;
    font-size: 0.5em;
    width: 10px;
    color: #fff;
    position: absolute;
    right: 0.75em;
    top: 45%;
  }

  & .nav-flyout {
    position: absolute;
    background-color: #080d11;
    z-index: 9;
    left: 2.5em;
    top: 0;
    height: 100vh;
    @include transform(translateX(100%));
    @include transition(all 0.5s ease);

    a:hover {
      background-color: rgba(255, 255, 255, 0.05);
    }
  }

  & ul > li:hover {
    .nav-flyout {
      @include transform(translateX(0));
      @include transition(all 0.5s ease);
    }
  }
`;

export const Tab = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto 10px;
  border-radius: 4px;
  background-color: $white;
  box-shadow: 0 0 0 1px rgba(236, 236, 236, 1);
  opacity: 1;
  transition: box-shadow 0.2s, opacity 0.4s;

  &:hover {
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.11);
  }
`;
