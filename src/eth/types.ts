export type tx = {
    "tx": string
    "block_id": string
    "device_id": string
    "user_id": string
    "data_tx": string
    "data": string
    "data_format": string
    "timestamp": number
    "timestamp_hash": string
    "nonce": number
}

export type block = {
    "block_id": string
    "block_hash": string
    "world_state": string[]
    "world_state_hash": string
    "body": tx
    "state_root": string[]
    "timestamp": number,
    "timestamp_hash": string
    "nonce": number
}