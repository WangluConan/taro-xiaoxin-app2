import { View } from '@tarojs/components';
import { useState } from 'react';
import { Toast } from 'tard'

const Toasts = () => {
    const [toastParams, setToast] = useState({ text: '普通提示!', visible: true });
    return (
        <View className="container">
            <Toast
                {...toastParams}
                onClose={() => setToast({visible: false, text: '',}) }
            />
        </View>
    );
};

export default Toasts