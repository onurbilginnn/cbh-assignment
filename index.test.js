import deterministicPartitionKey from ".";
import { TRIVIAL_PARTITION_KEY } from "./constants";

describe('Deterministic Partition Key Tests', () => {
    it('should return TRIVIAL_PARTITION_KEY', () => {
      const result = deterministicPartitionKey();
      expect(result).toBe(TRIVIAL_PARTITION_KEY);
    });
        it('should return crypto string', () => {
      const result = deterministicPartitionKey({partitionKey: '123'});
      expect(result).toBe(crypto.createHash(HASH_TYPE).update('123').digest(DIGEST_TYPE));
    });

  });
  
