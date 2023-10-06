import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';

export default function Bio() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const authenticate = async () => {
    try {
      const result = await LocalAuthentication.authenticateAsync();
      if (result.success) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
        alert('La autenticación biométrica falló.');
      }
    } catch (error) {
      console.error('Error de autenticación biométrica:', error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {isAuthenticated ? (
        <Text>¡Autenticación exitosa!</Text>
      ) : (
        <>
          <Button title="Autenticar con Huella Dactilar" onPress={authenticate} />
          <Text>Presiona el botón para autenticarte con huella dactilar.</Text>
        </>
      )}
    </View>
  );
}
