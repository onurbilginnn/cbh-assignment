import crypto from 'crypto';
import {
  TRIVIAL_PARTITION_KEY,
  MAX_PARTITION_KEY_LENGTH,
  DIGEST_TYPE,
  HASH_TYPE,
} from "./constants.js";

const deterministicPartitionKey = (event) => {
  const data = JSON.stringify(event);
  let candidate = TRIVIAL_PARTITION_KEY;
  
  if (event) candidate = event.partitionKey ? event.partitionKey
    : crypto.createHash(HASH_TYPE).update(data).digest(DIGEST_TYPE);

  if (typeof candidate !== "string") candidate = JSON.stringify(candidate);

  if (candidate.length > MAX_PARTITION_KEY_LENGTH) candidate = crypto
      .createHash(HASH_TYPE)
      .update(candidate)
      .digest(DIGEST_TYPE);
 
  return candidate;
};

export default deterministicPartitionKey;