import React from 'react';
import { View } from 'react-native';
import Svg, { Defs, LinearGradient, Stop, Text as SvgText } from 'react-native-svg';

interface GradientTextProps {
  text: string;
  colors: string[];
  fontSize?: number;
  fontWeight?: 'normal' | 'bold';
}

const GradientText: React.FC<GradientTextProps> = ({ colors, fontSize = 16, fontWeight = 'normal' }) => {
  const id = Math.random().toString(36).substring(7);

  return (
    <View style={{ flexDirection: 'column', alignItems: 'center' }}>
      <Svg height={'100%'} width={'100%'}>
        <Defs>
          <LinearGradient id={id} x1="0%" y1="0%" x2="0%" y2="100%">
            {colors.map((color, index) => (
              <Stop key={index} offset={`${index * (100 / (colors.length - 1))}%`} stopColor={color} />
            ))}
          </LinearGradient>
        </Defs>
        <SvgText fill={`url(#${id})`} fontSize={fontSize} fontWeight={fontWeight} x="0" y={fontSize}>24/7 parking facility with cctv camera,{'\n'}
         professional security guard, chair  disble, floor parking list facilities. You will get hassle parking facilities with 35% discount on first parking...</SvgText>
      </Svg>
    </View>
  );
};

export default GradientText;
