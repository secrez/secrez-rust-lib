use sodiumoxide::crypto::secretbox;
use serde_json;
use serde::{Deserialize, Serialize};

#[derive(Debug, Deserialize, Serialize)]
struct Payload {
    plaintext: String,
    keyarr: [u8; secretbox::KEYBYTES]
}

pub fn encrypt_payload(payload: &str) -> String {
    let payload: Payload = serde_json::from_str(payload).unwrap();
    let plaintext = payload.plaintext;
    let mut key = [0; secretbox::KEYBYTES];
    for i in 0..secretbox::KEYBYTES {
        key[i] = payload.keyarr[i];
    }
    let key = secretbox::Key(key);
    let nonce = secretbox::gen_nonce();
    let ciphertext = secretbox::seal(plaintext.as_bytes(), &nonce, &key);
    format!("{}{}", serde_json::to_string(&nonce).unwrap(), serde_json::to_string(&ciphertext).unwrap())
}

#[derive(Debug, Deserialize, Serialize)]
struct EncPayload {
    ciphertext: Vec<u8>,
    noncearr: [u8; secretbox::NONCEBYTES],
    keyarr: [u8; secretbox::KEYBYTES]
}

pub fn decrypt_payload(payload: &str) -> String {
    let payload: EncPayload = serde_json::from_str(payload).unwrap();
    let mut nonce = [0; secretbox::NONCEBYTES];
    for i in 0..secretbox::NONCEBYTES {
        nonce[i] = payload.noncearr[i];
    }
    let nonce = secretbox::Nonce(nonce);
    let mut key = [0; secretbox::KEYBYTES];
    for i in 0..secretbox::KEYBYTES {
        key[i] = payload.keyarr[i];
    }
    let key = secretbox::Key(key);
    let plaintext = secretbox::open(&payload.ciphertext, &nonce, &key).unwrap();
    String::from_utf8(plaintext.clone()).unwrap()
}
