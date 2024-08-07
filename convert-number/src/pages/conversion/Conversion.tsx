import React, { useState } from 'react';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonTextarea } from '@ionic/react';

const Conversion: React.FC = () => {
    const [decimal, setDecimal] = useState<string>('');
    const [hexadecimal, setHexadecimal] = useState<string>('');
    const [binary, setBinary] = useState<string>('');

    const handleDecimalChange = (value: string) => {
        setDecimal(value);
        const decNumber = parseInt(value, 10);
        if (!isNaN(decNumber)) {
            setHexadecimal(decNumber.toString(16).toUpperCase());
            setBinary(decNumber.toString(2));
        } else {
            setHexadecimal('');
            setBinary('');
        }
    };

    const handleHexadecimalChange = (value: string) => {
        setHexadecimal(value);
        const hexNumber = parseInt(value, 16);
        if (!isNaN(hexNumber)) {
            setDecimal(hexNumber.toString(10));
            setBinary(hexNumber.toString(2));
        } else {
            setDecimal('');
            setBinary('');
        }
    };

    const handleBinaryChange = (value: string) => {
        setBinary(value);
        const binNumber = parseInt(value, 2);
        if (!isNaN(binNumber)) {
            setDecimal(binNumber.toString(10));
            setHexadecimal(binNumber.toString(16).toUpperCase());
        } else {
            setDecimal('');
            setHexadecimal('');
        }
    };

    return (
        <IonCard>
            <IonCardHeader>
                <IonCardTitle>Number Conversion</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
                <IonTextarea
                    placeholder="Enter Decimal"
                    value={decimal}
                    onIonChange={e => handleDecimalChange(e.detail.value!)}
                />
                <IonTextarea
                    placeholder="Enter Hexadecimal"
                    value={hexadecimal}
                    onIonChange={e => handleHexadecimalChange(e.detail.value!)}
                />
                <IonTextarea
                    placeholder="Enter Binary"
                    value={binary}
                    onIonChange={e => handleBinaryChange(e.detail.value!)}
                />
            </IonCardContent>
        </IonCard>
    );
}

export default Conversion;
