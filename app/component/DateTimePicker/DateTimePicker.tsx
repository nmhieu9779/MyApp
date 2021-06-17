import React, {memo, useCallback, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import ReactNativeModal from 'react-native-modal';
import DatePicker from 'react-native-date-picker';

import {colors, Styles} from 'app/common/theme';
import {RCButton} from 'app/component';
import {ButtonColorType} from 'app/type';
import {useAppSelector, useDateTimePicker} from 'app/hooks';
import {selectDateTimePicker} from 'app/common/selectors';
import {useEffect} from 'react';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: colors.white,
    paddingBottom: 10,
  },
  button: {
    flex: 1,
    marginHorizontal: 10,
    ...Styles.center,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

const DateTimePicker = () => {
  const {
    isVisible,
    date: dateProp,
    onCallback,
  } = useAppSelector(selectDateTimePicker);
  const [, closeDateTimePicker] = useDateTimePicker();

  const [date, setDate] = useState(new Date());

  useEffect(() => {
    if (isVisible) {
      setDate(dateProp);
    }
  }, [isVisible, dateProp]);

  const onDateChange = useCallback(data => {
    setDate(data);
  }, []);

  const onPressToday = useCallback(() => {
    setDate(new Date());
  }, []);

  const onPressCancel = useCallback(() => {
    closeDateTimePicker();
  }, [closeDateTimePicker]);

  const onPressOk = useCallback(() => {
    onCallback(date);
    closeDateTimePicker();
  }, [date, closeDateTimePicker, onCallback]);

  return (
    <ReactNativeModal isVisible={isVisible} animationOutTiming={500}>
      <View style={styles.container}>
        <DatePicker date={date} onDateChange={onDateChange} />
        <View style={styles.buttonsContainer}>
          <RCButton
            buttonStyle={styles.button}
            title={'Cancel'}
            colorType={ButtonColorType.ERROR}
            onPress={onPressCancel}
          />
          <RCButton
            buttonStyle={styles.button}
            title={'Today'}
            onPress={onPressToday}
          />
          <RCButton
            buttonStyle={styles.button}
            title={'Ok'}
            onPress={onPressOk}
          />
        </View>
      </View>
    </ReactNativeModal>
  );
};

export default memo(DateTimePicker);
