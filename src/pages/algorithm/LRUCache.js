import Highlight from '../../components/highlight';
export default function LRUCache() {

  const code = `
  /**
 * @param {number} capacity
 */
    var LRUCache = function(capacity) {
        this.maxLength = capacity;
        this.cap = new Map();

        return this;
    };

    /** 
     * @param {number} key
     * @return {number}
     */
    LRUCache.prototype.get = function(key) {
        const {cap} = this;
        if (cap.has(key)) {
            let r = cap.get(key);
            cap.delete(key)
            cap.set(key, r)
            return r;
        }
        return -1;
    }
    ;

    /** 
     * @param {number} key 
     * @param {number} value
     * @return {void}
     */
    LRUCache.prototype.put = function(key, value) {
        const {cap} = this

        if (cap.has(key)) {
            cap.delete(key);
            cap.set(key, value)
            return
        }

        const {size} = cap;
        if (this.maxLength <= size) {
            // 逐出 最久未使用的关键字
            let [firstKey] = cap.keys()
            cap.delete(firstKey)
        }
        cap.set(key,value);
    };
  `

  return (
    <>
      <a href='https://leetcode.cn/problems/lru-cache/solutions/259678/lruhuan-cun-ji-zhi-by-leetcode-solution/'>详细解题网址</a>
      <hr />
      <h3> LRU 缓存</h3>
      <Highlight className="code">
        {code}
      </Highlight>
    </>
  )
}