import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import pluralize from 'pluralize';
import { styles, Icon, Subheading } from '@storybook/design-system';

const { breakpoint, color, spacing, typography } = styles;

const GuideWrapper = styled.span`
  display: block;
  background: #ffffff;
  color: #000000;
  padding: 0px 0px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: left;
  height: 400px;
  box-shadow: none;

  @media (min-width: ${breakpoint}px) {
    height: 450px;
  }

  @media (min-width: ${breakpoint * 1.25}px) {
    height: 335px;
  }
`;

const GuideTitle = styled.span`
  display: block;
  font-size: ${typography.size.m1}px;
  font-weight: ${typography.weight.black};
  line-height: ${typography.size.m3}px;
  padding: 30px 30px 0px;
`;

const GuideDescription = styled.span`
  display: block;
  margin-top: ${spacing.padding.small}px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  padding: 0px 30px;
`;

const GuideChapterCount = styled(Subheading)`
  display: block;
  margin-top: ${spacing.padding.small}px;
  font-size: ${typography.size.s1}px;
  opacity: 0.5;
`;

const GuideImageWrapper = styled.span`
  height: 170px;
  display: flex;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 10px 0px;
`;

const GuideImage = styled.img`
  margin: ${spacing.padding.medium}px auto 0;
  width: fit-content;
  max-width: 100%;
  max-height: fit-content;;
  border-radius: 8px 8px 0px 0px;
`;

const StyledIcon = styled(Icon)`
  opacity: 0.7;
  height: 0.8em !important;
  bottom: -0.25em !important;
`;

const Guide = ({ chapterCount, description, imagePath, themeColor, title, ...props }) => (
  <GuideWrapper themeColor={themeColor} {...props}>
    <GuideImageWrapper>{imagePath && <GuideImage src={imagePath} alt={title} />}</GuideImageWrapper>

    <div>
      <GuideTitle>
        {title} <StyledIcon icon="arrowrightalt" />
      </GuideTitle>
      <GuideDescription>{description}</GuideDescription>
    </div>
  </GuideWrapper>
);

Guide.propTypes = {
  chapterCount: PropTypes.number,
  description: PropTypes.string.isRequired,
  imagePath: PropTypes.string,
  themeColor: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

Guide.defaultProps = {
  chapterCount: null,
  imagePath: null,
};

export default Guide;
