// // import React from 'react';
// // import styled from 'styled-components';
// // import { Search } from '@styled-icons/fa-solid/Search';
// // import { Heart } from '@styled-icons/fa-solid/Heart';
// // import { ReorderThree } from '@styled-icons/ionicons-outline/ReorderThree';

// // const Header = () => {
// //   return (
// //     <HeaderContainer>
// //       <Logo>BookUsNow</Logo>
// //       <Nav>
// //       <CategoriesButton style={{borderRadius:'8px'}}>
// //           <ReorderThreeIcon />
// //           Categories
// //         </CategoriesButton>
// //         <SearchContainer >
// //           <SearchIcon />
// //           <SearchInput type="text" placeholder="Search here" />
// //         </SearchContainer>
// //         <FavoriteButton>
// //           <HeartIcon />
// //           Favorites
// //         </FavoriteButton>
// //         <SignInButton>Sign In</SignInButton>
// //       </Nav>
// //     </HeaderContainer>
// //   );
// // };

// // const HeaderContainer = styled.header`
// //   background-color: #ffffff;
// //   padding: 1rem;
// //   border-bottom: 1px solid #B0BABF;
// //   display: flex;
// //   align-items: center;
// //   justify-content: space-between;
// // `;

// // const Logo = styled.h1`
// //   color: #CF2D2D;
// //   font-size: 1.5rem;
// //   font-family: 'Inter', sans-serif;
// //   margin: 0;
// // `;

// // const Nav = styled.nav`
// //   display: flex;
  

// //   align-items: center;
// // `;

// // const CategoriesButton = styled.button`
// //   background-color: #000;
// //   border: none;
// //   color:white;
// //   padding: 0.5rem;
// //   cursor: pointer;
// //   font-family: 'Inter', sans-serif;
// //   font-size: 1rem;
// //   margin-right: 1rem;
// //   display: flex;
  
// //   align-items: center;
// //   justify-content: center;
// // `;
// // const ReorderThreeIcon = styled(ReorderThree)`
// //   width: 1.5rem;
// //   color: #fff;
// // `;

// // const SearchContainer = styled.div`
// //   display: flex;
 
// //  justify-content: center;
// //   align-items: center;
// //   border: 1px solid #B0BABF;
// //   border-radius: 4px;
// //   padding: 0.5rem;
// //   margin-right: 1rem;
// // `;

// // const SearchIcon = styled(Search)`
// //   width: 1rem;
// //   color: #000;
// //   margin-right: 0.5rem;
// // `;

// // const SearchInput = styled.input`
// //   border: none;
// //   outline: none;
// //   font-family: 'Inter', sans-serif;
// //   font-size: 1rem;
// // `;

// // const FavoriteButton = styled.button`
// //   background-color: transparent;
// //   border: none;
// //   font-family: 'Inter', sans-serif;
// //   font-size: 1rem;
// //   color: #989090;
// //   cursor: pointer;
// //   display: flex;
// //   align-items: center;
// //   margin-right: 1rem;
// // `;

// // const HeartIcon = styled(Heart)`
// //   width: 1rem;
// //   color:  #989090;
// //   margin-right: 0.5rem;
// // `;

// // const SignInButton = styled.button`
  
// //   border: 1px  #989090;

// //   border-radius: 4px;
// //   color:  #989090;
// //   font-family: 'Inter', sans-serif;
// //   font-size: 1rem;
// //   padding: 0.5rem 1rem;
// //   cursor: pointer;
// // `;

// // export default Header;

// import React from 'react';
// import styled from 'styled-components';
// import { Search } from '@styled-icons/fa-solid/Search';
// import { Heart } from '@styled-icons/fa-solid/Heart';
// import { ReorderThree } from '@styled-icons/ionicons-outline/ReorderThree';

// const Header = () => {
//   return (
//     <HeaderContainer>
//       <LeftSection>
//         <Logo>BookUsNow</Logo>
//         <CategoriesButton style={{ borderRadius: '8px' }}>
//           <ReorderThreeIcon />
//           Categories
//         </CategoriesButton>
//       </LeftSection>
//       <CenterSection>
//         <SearchContainer>
//           <SearchIcon />
//           <SearchInput type="text" placeholder="Search here" />
//         </SearchContainer>
//       </CenterSection>
//       <RightSection>
//         <FavoriteButton>
//           <HeartIcon />
//           Favorites
//         </FavoriteButton>
//         <SignInButton>Sign In</SignInButton>
//       </RightSection>
//     </HeaderContainer>
//   );
// };

// const HeaderContainer = styled.header`
//   background-color: #ffffff;
//   padding: 1rem;
//   border-bottom: 1px solid #B0BABF;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
// `;

// const LeftSection = styled.div`
//   display: flex;
//   align-items: center;
//   flex-shrink: 0;
// `;

// const CenterSection = styled.div`
//   display: flex;
//   justify-content: center;
//   flex-grow: 1;
// `;

// const RightSection = styled.div`
//   display: flex;
//   align-items: center;
//   flex-shrink: 0;
// `;

// const Logo = styled.h1`
//   color: #CF2D2D;
//   font-size: 1.5rem;
//   font-family: 'Inter', sans-serif;
//   margin: 0;
//   margin-right: 1rem;
// `;

// const CategoriesButton = styled.button`
//   background-color: #000;
//   border: none;
//   color: white;
//   padding: 0.5rem;
//   cursor: pointer;
//   font-family: 'Inter', sans-serif;
//   font-size: 1rem;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// const ReorderThreeIcon = styled(ReorderThree)`
//   width: 1.5rem;
//   color: #fff;
//   margin-right: 0.5rem;
// `;

// const SearchContainer = styled.div`
//   display: flex;
//   align-items: center;
//   border: 1px solid #B0BABF;
//   border-radius: 4px;
//   padding: 0.5rem;
//   width: 400px; /* Increase width here */
// `;

// const SearchIcon = styled(Search)`
//   width: 1rem;
//   color: #000;
//   margin-right: 0.5rem;
// `;

// const SearchInput = styled.input`
//   border: none;
//   outline: none;
//   font-family: 'Inter', sans-serif;
//   font-size: 1rem;
//   width: 100%; /* Adjust width to fill the container */
// `;

// const FavoriteButton = styled.button`
//   background-color: transparent;
//   border: none;
//   font-family: 'Inter', sans-serif;
//   font-size: 1rem;
//   color: #989090;
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   margin-right: 1rem;
// `;

// const HeartIcon = styled(Heart)`
//   width: 1rem;
//   color: #989090;
//   margin-right: 0.5rem;
// `;

// const SignInButton = styled.button`
//   border: 1px solid #989090;
//   border-radius: 4px;
//   color: #989090;
//   font-family: 'Inter', sans-serif;
//   font-size: 1rem;
//   padding: 0.5rem 1rem;
//   cursor: pointer;
// `;

// export default Header;
import React from 'react';
import styled from 'styled-components';
import { Search } from '@styled-icons/fa-solid/Search';
import { Heart } from '@styled-icons/fa-solid/Heart';
import { ReorderThree } from '@styled-icons/ionicons-outline/ReorderThree';

const Header = () => {
  return (
    <HeaderContainer>
      <LogoSection>
        <Logo>BookUsNow</Logo>
        <CategoriesButton style={{ borderRadius: '8px' }}>
          <ReorderThreeIcon />
          Categories
        </CategoriesButton>
      </LogoSection>
      <SearchContainer>
        <SearchIcon />
        <SearchInput type="text" placeholder="Search here" />
      </SearchContainer>
      <RightSection>
        <FavoriteButton>
          <HeartIcon />
          Favorites
        </FavoriteButton>
        <SignInButton>Sign In</SignInButton>
      </RightSection>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  background-color: #ffffff;
  padding: 1rem;
  border-bottom: 1px solid #B0BABF;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.h1`
  color: #CF2D2D;
  font-size: 1.5rem;
  font-family: 'Inter', sans-serif;
  margin: 0;
  margin-right: 1rem;
`;

const CategoriesButton = styled.button`
  background-color: #000;
  border: none;
  color: white;
  padding: 0.5rem;
  cursor: pointer;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ReorderThreeIcon = styled(ReorderThree)`
  width: 1.5rem;
  color: #fff;
  margin-right: 0.5rem;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #B0BABF;
  border-radius: 4px;
  padding: 0.5rem;
  flex-grow: 1;
  margin: 0 1rem; /* Adjust margins as needed */
`;

const SearchIcon = styled(Search)`
  width: 1rem;
  color: #000;
  margin-right: 0.5rem;
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  width: 100%; /* Fill the container */
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
`;

const FavoriteButton = styled.button`
  background-color: transparent;
  border: none;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  color: #989090;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-right: 1rem;
`;

const HeartIcon = styled(Heart)`
  width: 1rem;
  color: #989090;
  margin-right: 0.5rem;
`;

const SignInButton = styled.button`
  border: 1px solid #989090;
  border-radius: 4px;
  color: #989090;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
`;

export default Header;


